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
    sinon.stub(Model, 'findOne').resolves(user);
    const reqBody = {
        email: 'admin@admin.com',
        password: 'secret_admin'
    }
     
        const response = await chai.request(app.app).post('/login').send(reqBody);

    })
})