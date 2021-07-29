/*!
 * Copyright (c) 2020-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import '@okta/odyssey-scss';

import "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-go";
import "prismjs/components/prism-http";
import "prismjs/components/prism-java";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-python";
import "prismjs/components/prism-objectivec";
import 'prismjs/components/prism-markup-templating';
import "prismjs/components/prism-php";
import "prismjs/components/prism-swift";

import './theme.scss';

import CustomPropertyInspector from './utils/CustomPropertyInspector.js'


const urlParams = new URLSearchParams(window.location.search);
const hasInspector = urlParams.get('inspector');

if (hasInspector) {
  new CustomPropertyInspector({
    propertiesElement: document.body
  });
}
