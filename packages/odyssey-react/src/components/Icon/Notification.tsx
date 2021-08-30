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
const Notification = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon title="Notification" ref={ref} {...props}>
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 5V8L11.9645 10.6292C12.0105 10.7046 12.012 10.7997 11.9675 10.8761 11.923 10.9525 11.84 11 11.75 11H2.24966C2.15966 11 2.07716 10.9525 2.03265 10.8756 1.98814 10.7987 1.98914 10.7047 2.03565 10.6287L4 8V5C4 4 5 3 6 3V2C6 1.45975 6.4483 1 6.99983 1 7.55136 1 8 1.45975 8 2V3C9 3 10 4 10 5zM5 12C5 12.5 5.9996 13 6.9998 13 8 13 9 12.5 9 12H5z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));
export default Notification;
