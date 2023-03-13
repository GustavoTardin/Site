import * as sinon from 'sinon';
import { Model } from 'sequelize';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';
import { user } from './mocks/user';

chai.use(chaiHttp);

const { expect } = chai;

describe('teste da rota /login', function() {
    afterEach(function () {
        sinon.restore()
    })

    const app = new App();

    it('Testa POST /login, função checkLogin em caso de sucesso', async function() {
        const reqBody = {
            email: 'admin@admin.com',
            password: 'secret_admin'
        }
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2Nzg3MTM5MDEsImV4cCI6MTY3OTMxODcwMX0.Lu7Ho8qEAow3GJnvMGm4JKPfaJdWQGw6J9brqSE1ccA'
        
        sinon.stub(Model, 'findOne').resolves(user);
        const response = await chai.request(app.app).post('/login').send(reqBody);

        expect(response.status).to.be.equal(200)

    })
})