// Create a Function That Returns a License Badge Based on Which License Is Passed In
// If There Is No License, Return An Empty String
function renderLicenseBadge(license) {

    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;

        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;

        case 'GNU GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;

        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;

        default: ''
            break;
    }
}

// Create a Function That Returns the License Link
// If there is No License, Return An Empty String
function renderLicenseLink(license) {

    switch (license) {
        case 'MIT':
            return '(https://opensource.org/licenses/MIT)'
            break;

        case 'Apache License 2.0':
            return '(https://opensource.org/licenses/Apache-2.0)'
            break;

        case 'GNU GPLv3':
            return '(https://www.gnu.org/licenses/gpl-3.0)'
            break;

        case 'Mozilla Public License 2.0':
            return'(https://opensource.org/licenses/MPL-2.0)'
            break;

        default: ''
            break;
    }
}

// Create a Function That Returns the License Section of README
// If there is No License, Return An Empty String
function renderLicenseSection(license, name, year) {

    switch (license) {
        case 'MIT':
            return `Copyright ${year} ${name}

            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
            break;

            case 'Apache License 2.0':
                return `Copyright ${year} ${name}
    
                    Licensed under the Apache License, Version 2.0 (the "License");
                    you may not use this file except in compliance with the License.
                    You may obtain a copy of the License at
                 
                      http://www.apache.org/licenses/LICENSE-2.0
                 
                    Unless required by applicable law or agreed to in writing, software
                    distributed under the License is distributed on an "AS IS" BASIS,
                    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    See the License for the specific language governing permissions and
                    limitations under the License.`
                break;


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;
