require('mocha');
let settings = require('../modules/runtime/settings');
let env = require('../modules/runtime/environments');
let pm = require('../modules/apis/postman');
let utils = require('../modules/runtime/utils');
let chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('INTEGRATION API TESTS', function () {
  let data = settings.runtimeData;
  let options = settings.options;
  let expect = settings.expect;
  this.timeout(options.apiCallTimeout);

  before('Use config from server', function () {
    settings.setEnvironment('dev');
    return env.loadAndSetConfig();
  });

  after("Data cleanup.", function () {
  });

  describe('Test suite one', function () {

    it('Should be able to call get request', async function () {
      // Given
      const query = '?foo1=bar1&foo2=bar2';
      // When
      let response = await pm.getRequest(query);
      // Then
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('args');
      expect(response.body.args.foo1).to.equal('bar1');
    });

    it('Should be able to call post request', async function () {
      // Given
      data.pm.first_name = utils.randomString(1, 'QWERTYUIOPLKJHGFDSAZXCVBNM') + utils.randomString(14, 'qwertyuioplkjhgfdsazxcvbnm');
      // When
      let response = await pm.postRequest();
      // Then
      expect(response.statusCode).to.equal(200);
      expect(response.body.data).to.have.property('first_name');
      expect(response.body.data.date_stamp).to.equal(utils.getDateStamp());
      expect(JSON.stringify(response.body)).to.contain(data.pm.first_name);
    });

    it('Should be able to call put request', async function () {
      // Given
      data.pm.first_name = utils.randomString(1, 'QWERTYUIOPLKJHGFDSAZXCVBNM') + utils.randomString(14, 'qwertyuioplkjhgfdsazxcvbnm');
      // When
      let response = await pm.putRequest();
      // Then
      expect(response.statusCode).to.equal(200);
      expect(response.body.data).to.have.property('first_name');
      expect(response.body.data.date_stamp).to.equal(utils.getDateStamp());
      expect(JSON.stringify(response.body)).to.contain(data.pm.first_name);
    });

    it('Should be able to call patch request', async function () {
      // Given
      data.pm.first_name = utils.randomString(1, 'QWERTYUIOPLKJHGFDSAZXCVBNM') + utils.randomString(14, 'qwertyuioplkjhgfdsazxcvbnm');
      // When
      let response = await pm.patchRequest();
      // Then
      expect(response.statusCode).to.equal(200);
      expect(response.body.data).to.have.property('first_name');
      expect(response.body.data.date_stamp).to.equal(utils.getDateStamp());
      expect(JSON.stringify(response.body)).to.contain(data.pm.first_name);
    });

    it('Should be able to call delete request', async function () {
      // Given
      data.pm.id = utils.randomString(5, '123456789');
      // When
      let response = await pm.deleteRequest();
      // Then
      expect(response.statusCode).to.equal(200);
      expect(response.body.data).to.not.have.property('first_name');
      expect(JSON.stringify(response.body)).to.not.contain(data.pm.first_name);
    });

  });
  
});
