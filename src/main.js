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
require('dotenv').config();
const fs = require('fs');
const path = require('path');

let initializer = require('./modules/initializer');
let filenameCleaner = require('./modules/filenameCleaner');
let schemaWriter = require('./modules/schemaWriter');
let schemaReader = require('./modules/schemaReader');
let versionInjector = require('./modules/versionInjector');

console.log("---Application started---");

//Setup the environment
initializer.initialize();

//
//This is the main loop...
//
//As this grows this will need to be a service that can read different shapes
//But for now just read the existing flat source direction and fix each file.
let scheamsInputDirectory = path.join(process.env.INPUT_DIRECTORY,process.env.FLAT_SCHEMAS_INPUT_DIRECTORY);
fs.readdirSync(scheamsInputDirectory).forEach(filename => {

    //Get a clean filename with no version info in it
    let newFilename = filenameCleaner.scrub(filename);

    //Get the schema itself
    let schema = schemaReader.read(filename);

    //If we want to inject the version that was on the filename do it...
    if ( process.env.INJECT_VERSION == "true"){
        schema = versionInjector.injectVersionIntoSchema(filename,schema);
    }

    //Write out the schema file in the target directory
    schemaWriter.write(newFilename,schema)
});

console.log("--Application finished---");

