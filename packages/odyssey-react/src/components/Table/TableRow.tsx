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

import React, { forwardRef } from "react";
import type { ReactElement, ComponentPropsWithRef } from "react";
import { useOmit } from "../../utils";

export interface TableRowProps
  extends Omit<ComponentPropsWithRef<"tr">, "style" | "className"> {
  children?: ReactElement | ReactElement[];
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    const omitProps = useOmit(rest);

    return (
      <tr {...omitProps} ref={ref}>
        {children}
      </tr>
    );
  }
);

TableRow.displayName = "TableRow";
