import * as sinon from 'sinon';
import { Model } from 'sequelize';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';
import { user } from './mocks/user';
import User from '../database/models/UserModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('teste da rota /login', function() {
    afterEach(function () {
        sinon.restore()
    })

    const app = new App();

    it('Testa POST /login em caso de sucesso', async function() {
        const reqBody = {
            email: 'admin@admin.com',
            password: 'secret_admin'
        }
        
        sinon.stub(Model, 'findOne').resolves(user);
        const response = await chai.request(app.app).post('/login').send(reqBody);

        expect(response.status).to.be.equal(200)

    })
    it('Testa POST /login em caso de fracasso', async function() {
        const reqBody = {
            email: 'fakeuser@gmail.com',
            password: 'secret_admin'
        }
        sinon.stub(Model, 'findOne').resolves(null);
        const response = await chai.request(app.app).post('/login').send(reqBody);

        expect(response.status).to.be.equal(401);
        expect(response.body).to.be.deep.equal({ message: 'Invalid email or password' })
    })

})