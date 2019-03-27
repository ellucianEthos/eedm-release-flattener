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
 * Clean the file name to remove the version from it.
 * 
 * Assumes file names like:
 *   academic-catalogs_15.0.json
 *   academic-credentials_15.0.json
 *   etc
 */
function scrub (filename){
    let cleanedFilename = filename;
    if (filename != null && filename.length > 0){
        let index = filename.indexOf("_");
        if (index != null && index >= 0){
            cleanedFilename = filename.substring(0,index);
        }
    }
    return cleanedFilename;
}

/******************************************************************************
*   Exports
******************************************************************************/
module.exports = {scrub};