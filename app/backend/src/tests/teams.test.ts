import * as sinon from 'sinon';
import { Model } from 'sequelize';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import { team, teams } from './services/mocks/teams'
import TeamService from '../api/Service/TeamsService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota /teams', function() {
    afterEach(function () {
        sinon.restore()
    })
    describe('Teste da camada service', function () {
        const teamService = new TeamService();

        it('testa função getAll', async function () {
            sinon.stub(Model, 'findAll').resolves(teams)
           
            const result = await teamService.getAll();

            expect(result).to.be.deep.equal(teams)
        })

        it('testa função getById em caso de sucesso', async function() {
            sinon.stub(Model, 'findByPk').resolves(team)

            const result = await teamService.getById(1)

            expect(result).to.be.deep.equal({type: null, message: team})
        })
        it('testa função getById em caso de fracasso', async function () {
            sinon.stub(Model, 'findByPk').resolves(null)

            const result = await teamService.getById(9999)

            expect(result).to.be.deep.equal({ type: 404, message: 'This team does not exist' })
        })
    })
    describe('Teste da camada Controller', function() {
        const app = new App()

        it('testa função getAll', async function() {
            sinon.stub(Model, 'findAll').resolves(teams)

            const response = await chai.request(app.app).get('/teams');

            expect(response.status).to.be.equal(200)
            expect(response.body).to.be.deep.equal(teams)
        })
        it('testa função getById em caso de sucesso', async function() {
            sinon.stub(Model, 'findByPk').resolves(team)

            const response = await chai.request(app.app).get('/teams/1')

            expect(response.status).to.be.deep.equal(200);
            expect(response.body).to.be.deep.equal(team)
        })

        it('testa função getById em caso de fracasso', async function () {
            sinon.stub(Model, 'findByPk').resolves(null)

            const response = await chai.request(app.app).get('/teams/1')

            expect(response.status).to.be.deep.equal(404);
            expect(response.body).to.be.deep.equal({ message: 'This team does not exist' })
        })
    })
})
