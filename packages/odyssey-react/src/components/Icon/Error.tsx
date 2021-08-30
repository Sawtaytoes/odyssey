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
const Error = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon title="Error" ref={ref} {...props}>
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.63381 1.15168L1.15168 6.63381C0.949439 6.83605 0.949439 7.16395 1.15168 7.36619L6.63381 12.8483C6.83605 13.0506 7.16395 13.0506 7.36619 12.8483L12.8483 7.36619C13.0506 7.16395 13.0506 6.83605 12.8483 6.63381L7.36619 1.15168C7.16395 0.949439 6.83605 0.949439 6.63381 1.15168ZM6 3.00001H8V8H6V3.00001ZM8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44771 6.44772 9 7 9C7.55228 9 8 9.44771 8 10Z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));
export default Error;
