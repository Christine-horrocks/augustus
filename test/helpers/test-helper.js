const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('./fixture-helper');
const paths = require('./walk-helper');
const expect = require('chai').expect

const b = require('js-beautify').html;


  module.exports = {

    setupBefore: function(){
      beforeEach(function() {
        shunterTestHelper.setup(paths);
      });

      afterEach(shunterTestHelper.teardown);
    },

    shunterTest: function(fixture, fileRendered, fixtureLocation, done){
      const jsonFixture = fixtureHelper.getFixture(fixture, 'json', fixtureLocation);

      shunterTestHelper.render(fileRendered, jsonFixture, function(error, dom, output){
        const expectedHTML = fixtureHelper.getFixture(fixture, 'html', fixtureLocation);

        expect(b(expectedHTML)).to.equal(b(output))

        done();
      });
    }

  }
