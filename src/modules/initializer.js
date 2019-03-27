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

const fsextra = require('fs-extra');
const path = require('path');

/**
 * Initialize the things in the application we need to.
 */
function initialize (){
    initializeDotEnv();

    console.log("[Initializing target directory and defaulting env variables]");
    // Assume these directories has a lot of files and folders
    fsextra.emptyDirSync(process.env.OUTPUT_DIRECTORY);
    return;
}

/**
 * Setup the dotEnv env vars
 */
function initializeDotEnv(){
    if (!process.env.hasOwnProperty('OUTPUT_DIRECTORY')) { process.env.OUTPUT_DIRECTORY = "target"};
    if (!process.env.hasOwnProperty('INPUT_DIRECTORY')) { process.env.INPUT_DIRECTORY = "source"};
    if (!process.env.hasOwnProperty('FLAT_SCHEMAS_INPUT_DIRECTORY')) { process.env.FLAT_SCHEMAS_INPUT_DIRECTORY = "schemas"};
    if (!process.env.hasOwnProperty('INJECT_VERSION')) { process.env.INJECT_VERSION = "true"};
   
}

/******************************************************************************
*   Exports
******************************************************************************/
module.exports = {initialize};