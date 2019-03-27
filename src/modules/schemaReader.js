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

const path = require('path');
const fs = require('fs');

/**
 * Read the schema into a json object from the filename
 */
function read (filename){
    let readSchema;
    try {
        let scheamsInputDirectory = path.join(process.env.INPUT_DIRECTORY,process.env.FLAT_SCHEMAS_INPUT_DIRECTORY);
        readSchema = fs.readFileSync(path.join(scheamsInputDirectory,filename), 'utf8');
    } catch (err) {
        console.error('ERROR: failed to read schema ' + filename);
        process.exit(1);
    }
    return JSON.parse(readSchema);
}

/******************************************************************************
*   Exports
******************************************************************************/
module.exports = {read};