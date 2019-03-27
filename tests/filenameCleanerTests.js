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
var filenameCleaner = require('../src/modules/filenameCleaner.js');

var assert = require('assert');
describe('Filename Cleaner tests', function() {

  describe('inputs tests', function() {
    it('given null should return null', function() {
        let result = filenameCleaner.scrub(null);
        assert.equal(result,null);
    });

    it('given just name return just name', function() {
      let result = filenameCleaner.scrub("persons");
      assert.equal(result,"persons");
    });

    it('given just name with hypen return just name', function() {
      let result = filenameCleaner.scrub("academic-levels");
      assert.equal(result,"academic-levels");
    });

    it('given just empty string return empty string', function() {
      let result = filenameCleaner.scrub("");
      assert.equal(result,"");
    });

  });

  describe('inputs tests with version', function() {

    it('given name and whole version return just name', function() {
      let result = filenameCleaner.scrub("academic-levels_5");
      assert.equal(result,"academic-levels");
    });

    it('given name and whole version hyphen return just name', function() {
      let result = filenameCleaner.scrub("persons_5");
      assert.equal(result,"persons");
    });

    it('given name and two digit version hyphen return just name', function() {
      let result = filenameCleaner.scrub("persons_5.0");
      assert.equal(result,"persons");
    });

    it('given name and three digit version hyphen return just name', function() {
      let result = filenameCleaner.scrub("persons_5.0.0");
      assert.equal(result,"persons");
    });
  });

});

