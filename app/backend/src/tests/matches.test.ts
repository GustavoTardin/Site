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

})