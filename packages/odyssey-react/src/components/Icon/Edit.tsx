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
const Edit = forwardRef<SVGSVGElement, Props>((props, ref) => (
  <Icon title="Edit" ref={ref} {...props}>
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8008 2.78969L11.2103 1.19923C10.9447 0.933589 10.5121 0.933589 10.2465 1.19923L9 2.44572L11.5543 5L12.8007 3.75351C13.0664 3.48787 13.0664 3.05533 12.8008 2.78969ZM3.5 13L10.5 6L8 3.5L1 10.5V13L3.5 13Z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));
export default Edit;
