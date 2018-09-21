const assert = require('assert');
import fetch from 'isomorphic-fetch';
import { SurveyService } from '../src/app/survey.service';

describe('SurveyService', function() {
  describe('Create', function() {
    it('should create an survey and return OK', function(done) {
        let survey = {};
        SurveyService.create(survey).then(result => { 
            assert.equal(result.ok, true);
            done();
        });
    });
  });
});