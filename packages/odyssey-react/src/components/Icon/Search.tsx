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
const Search = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon title="Search" ref={ref} {...props}>
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75739 10.1716C7.96696 10.6951 7.01908 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 7.01908 10.6951 7.96696 10.1716 8.75739L12.6908 11.2766C13.0813 11.6671 13.0813 12.3003 12.6908 12.6908C12.3003 13.0813 11.6671 13.0813 11.2766 12.6908L8.75739 10.1716ZM9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));
export default Search;
