import * as sinon from 'sinon';
import { Model } from 'sequelize';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';
import { homeTeamResponse, awayTeamResponse, fullOrganized, homeLeaderboard, homeOrganized, awayOrganized } from './mocks/leaderboard'
import orderLeaderBoard from '../api/Utils/orderLeaderboard';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota /leaderboard', function() {

    afterEach(function () {
        sinon.restore()
    })
    const { app } = new App();

    it('teste GET /leaderboard', async function() {
        sinon.stub(Model, 'findAll').onFirstCall().resolves(
            homeTeamResponse as unknown as Model<any>[]).onSecondCall().resolves(
            awayTeamResponse as unknown as Model<any>[]);

        const response = await chai.request(app).get('/leaderboard')

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.deep.equal(fullOrganized);
    })
    it('teste GET /leaderboard/home', async function() {
        sinon.stub(Model, 'findAll').resolves(homeTeamResponse as unknown as Model<any>[]);

        const response = await chai.request(app).get('/leaderboard/home');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.deep.equal(homeLeaderboard);
        
    })
    it('teste GET /leaderboard/away', async function () {
        sinon.stub(Model, 'findAll').resolves(awayTeamResponse as unknown as Model<any>[]);

        const response = await chai.request(app).get('/leaderboard/away');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.deep.equal(awayOrganized);

    })
    
})