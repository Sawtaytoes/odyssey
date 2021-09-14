/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

const { pattern, template, header } = require('./utils/header');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ignorePatterns: [
    'node_modules',
    'dist'
  ],
  plugins: [
    'header',
  ],
  rules: {
    'header/header': [
      'error',
      'block',
      [
        '!',
        { pattern, template },
        ...header.split('\n')
      ],
      2,
    ]
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      extends: ["eslint:recommended", "prettier"],
    },
    {
      files: [ '*.ts', '*.tsx' ],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
    },
    {
      files: [ 'jest.setup.js', '*.test.*' ],
      env: {
        jest: true
      }
    },
    {
      files: [ '*.jsx', '*.tsx' ],
      extends: [
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
      ],
      rules: {
        'jsx-a11y/label-has-associated-control': [
          2,
          {
            labelAttributes: [ 'children' ],
          }
        ]
      }
    },
  ],
};
