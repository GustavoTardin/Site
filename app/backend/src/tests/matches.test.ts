import * as sinon from 'sinon';
import { Model } from 'sequelize';
import * as chai from 'chai';
import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';
import { matches, bodyResponse, newMatch, token } from './mocks/matches'
chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota /matches', function() {

    afterEach(function () {
        sinon.restore()
    })
    const {app} = new App();


    it('teste GET /matches', async function() {

    sinon.stub(Model, 'findAll').resolves(matches);

    const response = await chai.request(app).get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(matches);
    })

    it('teste patch /matches/:id/finish sem token', async function() {
        const response = await chai.request(app).patch('/matches/1/finish');
        expect(response.status).to.be.equal(401);
        expect(response.body).to.be.deep.equal({ "message": "Token not found" });
    })
    it('teste patch /matches/:id/finish com id inexistente', async function() {
      sinon.stub(Model, 'findByPk').resolves(null);
        const response = await chai.request(app).patch('/matches/999/finish').set("Authorization", token);
        expect(response.status).to.be.equal(400);
        expect(response.body).to.be.deep.equal({ "message": "There is not a match with this id" });
    })
    it('testa patch /matches/:id/finish em caso de sucesso', async function() {
        sinon.stub(Model, 'findByPk').resolves(matches[0]);

        const response = await chai.request(app).patch('/matches/1/finish').set("Authorization", token);

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.deep.equal({ "message": "Finished" });
    })

    it('testa GET /matches?InProgress=true', async function() {
        sinon.stub(Model, 'findAll').resolves([matches[2]]);

        const response = await chai.request(app).get('/matches?inProgress=true').set("Authorization", token);

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.deep.equal([matches[2]]);
    })

})