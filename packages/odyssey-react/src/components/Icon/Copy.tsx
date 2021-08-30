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

import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import Icon from "./Icon";
export type Props = {
  title?: string;
  titleId?: string;
  size?: string;
  color?: string;
} & ComponentPropsWithRef<"svg">;
const Copy = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon title="Copy" ref={ref} {...props}>
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7H3V11H7V7ZM1.5 5C1.22386 5 1 5.22386 1 5.5V12.5C1 12.7761 1.22386 13 1.5 13H8.5C8.77614 13 9 12.7761 9 12.5V5.5C9 5.22386 8.77614 5 8.5 5H1.5Z"
        fill="currentColor"
      />
      <path
        d="M7 3H11V7H10V8.5C10 8.77614 10.2239 9 10.5 9H12.5C12.7761 9 13 8.77614 13 8.5V1.5C13 1.22386 12.7761 1 12.5 1H5.5C5.22386 1 5 1.22386 5 1.5V3.5C5 3.77614 5.22386 4 5.5 4H7V3Z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));
export default Copy;
