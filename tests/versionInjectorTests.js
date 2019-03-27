/*
 * ******************************************************************************
 * Copyright  2019 Ellucian Company L.P. and its affiliates.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ******************************************************************************
 */

'use strict';
var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var versionInjector = require('../src/modules/versionInjector.js');

var assert = require('assert');
describe('Version Injector Tests', function() {

  describe('Null tests', function() {

    it('given null return null', function() {
      let result = versionInjector.injectVersionIntoSchema(null, null);
      assert.equal(result,null);
    });

    it('given null return null', function() {
        let testSchema = {"foo":"bar"};
        let result = versionInjector.injectVersionIntoSchema(null,testSchema );
        assert.equal(result,result);
      });
  });

  describe('version tests', function() {


    it('given whole number return with version', function() {
        let testSchema = {"foo":"bar"};
        let result = versionInjector.injectVersionIntoSchema("foo_1.json",testSchema );
        assert.equal(result.version,1);
      });
      it('given two digit number return with version', function() {
        let testSchema = {"foo":"bar"};
        let result = versionInjector.injectVersionIntoSchema("foo_1.0.json",testSchema );
        assert.equal(result.version,"1.0");
      });
      it('given two digit number return with version', function() {
        let testSchema = {"foo":"bar"};
        let result = versionInjector.injectVersionIntoSchema("foo_1.0.2.json",testSchema );
        assert.equal(result.version,"1.0.2");
      });
  });


});

