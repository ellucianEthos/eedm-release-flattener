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

/**
 * Initialize the things in the application we need to.
 */
function injectVersionIntoSchema (sourceFilename, schema){
    let newSchema = schema;
    if (sourceFilename != null && schema != null)
    {
        let version = getVersion(sourceFilename);
        if (version != null){
            if (newSchema.version == null){
                newSchema.version = version;
                console.log("-Injecting version number into schema " + sourceFilename);
            }
        }
    }
    return newSchema;
}
/**
 * Get the version number from the filename if we can
 * @param {} sourceFileName 
 */
function getVersion(sourceFileName){
    let version = null;
    let index = sourceFileName.indexOf("_");
    if (index != null && index >= 0){
        let versionFromFileWithExtension = sourceFileName.substring(index+1,sourceFileName.length);
        let extIndex = versionFromFileWithExtension.indexOf(".json");
        let versionFromFile = versionFromFileWithExtension.substring(0,extIndex);
        version = versionFromFile;
    }
    return version;
}

/******************************************************************************
*   Exports
******************************************************************************/
module.exports = {injectVersionIntoSchema};