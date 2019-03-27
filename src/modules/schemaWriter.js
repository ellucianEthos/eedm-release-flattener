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
 * Save the schema to the filename
 */
function write (filename,schema){
    let schemaPath = process.env.OUTPUT_DIRECTORY;
    if (filename != null && schema != null){
        let newSchemaFile = path.join(schemaPath,filename + ".json");
        fs.writeFileSync(newSchemaFile, JSON.stringify(schema, null, 2),{encoding:'utf8',flag:'w'});
        console.log("-Target schema file created " + newSchemaFile);
    }else{
        console.log("*Error could not write schema because the filename or the schema was null. " + filename);
    }  
}

/******************************************************************************
*   Exports
******************************************************************************/
module.exports = {write};