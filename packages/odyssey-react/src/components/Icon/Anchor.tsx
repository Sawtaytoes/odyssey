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

// Code automatically generated by svgr; DO NOT EDIT.

import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { useOmit } from "../../utils";
import SvgIcon from "./SvgIcon";

export interface Props
  extends Omit<ComponentPropsWithoutRef<"svg">, "style" | "className"> {
  title?: string;
}

const AnchorIcon = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <SvgIcon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.32067 5.67758C7.79559 5.1527 7.08356 4.85784 6.34113 4.85784C5.59869 4.85784 4.88666 5.1527 4.36158 5.67758L1.81825 8.22267C1.42752 8.61434 1.16158 9.11298 1.054 9.65566C0.946411 10.1983 1.002 10.7607 1.21375 11.2718C1.42549 11.783 1.78391 12.2199 2.24375 12.5275C2.7036 12.8351 3.24426 12.9996 3.7975 13.0002C4.16467 13.0014 4.52845 12.9299 4.86785 12.7899C5.20725 12.6498 5.51557 12.4439 5.775 12.1841L7.875 10.0841C7.90289 10.0561 7.92186 10.0204 7.92951 9.98164C7.93716 9.94285 7.93315 9.90267 7.91798 9.86616C7.90282 9.82966 7.87718 9.79846 7.8443 9.77651C7.81143 9.75456 7.77278 9.74284 7.73325 9.74283H7.65333C7.2146 9.74422 6.77983 9.6598 6.3735 9.49433C6.33683 9.47928 6.29652 9.47546 6.25768 9.48336C6.21884 9.49125 6.18322 9.5105 6.15533 9.53867L4.64567 11.0501C4.53494 11.1648 4.40246 11.2563 4.25599 11.3192C4.10951 11.3822 3.95196 11.4153 3.79254 11.4167C3.63311 11.4181 3.475 11.3878 3.32744 11.3274C3.17988 11.2671 3.04582 11.1779 2.93308 11.0652C2.82035 10.9524 2.7312 10.8184 2.67084 10.6708C2.61047 10.5232 2.58011 10.3651 2.58151 10.2057C2.58292 10.0463 2.61606 9.88874 2.67901 9.74226C2.74197 9.59579 2.83346 9.46332 2.94817 9.35258L5.50083 6.80167C5.72581 6.577 6.03076 6.45081 6.34871 6.45081C6.66666 6.45081 6.9716 6.577 7.19658 6.80167C7.51217 7.09917 8.0045 7.09917 8.32008 6.80167C8.456 6.66575 8.53825 6.4855 8.55225 6.29417C8.55948 6.18089 8.54252 6.06738 8.50249 5.96117C8.46246 5.85496 8.40028 5.75849 8.32008 5.67817L8.32067 5.67758Z"
          fill="currentColor"
        />
        <path
          d="M12.1783 1.82C11.6532 1.29512 10.9411 1.00026 10.1987 1.00026C9.45628 1.00026 8.74424 1.29512 8.21917 1.82L6.1215 3.91533C6.09294 3.94353 6.07351 3.97966 6.06575 4.01903C6.05798 4.05841 6.06224 4.09921 6.07797 4.13614C6.09369 4.17306 6.12016 4.2044 6.15393 4.22609C6.1877 4.24778 6.22721 4.25881 6.26733 4.25775H6.34142C6.77945 4.25689 7.21343 4.3417 7.61892 4.50742C7.65553 4.52254 7.6958 4.52645 7.73464 4.51866C7.77348 4.51088 7.80913 4.49173 7.83708 4.46367L9.34267 2.95983C9.4534 2.84513 9.58587 2.75363 9.73235 2.69068C9.87882 2.62773 10.0364 2.59458 10.1958 2.59318C10.3552 2.59177 10.5133 2.62214 10.6609 2.6825C10.8085 2.74286 10.9425 2.83201 11.0553 2.94475C11.168 3.05748 11.2571 3.19155 11.3175 3.33911C11.3779 3.48667 11.4082 3.64478 11.4068 3.8042C11.4054 3.96363 11.3723 4.12118 11.3093 4.26765C11.2464 4.41413 11.1549 4.5466 11.0402 4.65733L9.16475 6.531L9.149 6.54908L8.49275 7.20125C8.26777 7.42591 7.96282 7.5521 7.64487 7.5521C7.32693 7.5521 7.02198 7.42591 6.797 7.20125C6.6449 7.05827 6.444 6.97867 6.23525 6.97867C6.0265 6.97867 5.8256 7.05827 5.6735 7.20125C5.53679 7.33809 5.45431 7.51984 5.44133 7.71283C5.42675 7.94208 5.51133 8.16608 5.6735 8.32883C5.90474 8.56121 6.17531 8.75081 6.47267 8.88883C6.51525 8.90866 6.55725 8.925 6.59925 8.9425C6.64125 8.96058 6.685 8.97458 6.72758 8.99091C6.769 9.00666 6.81333 9.02066 6.85533 9.03291L6.97317 9.06441C7.05308 9.08483 7.133 9.10058 7.21525 9.11458C7.31383 9.12916 7.41358 9.1385 7.51275 9.14258H7.66442L7.78517 9.12858C7.82892 9.12683 7.875 9.11691 7.92692 9.11691H7.99517L8.13283 9.0965L8.197 9.08483L8.31308 9.06091H8.33467C8.82594 8.93747 9.27452 8.68304 9.63258 8.32475L12.1783 5.77908C12.7031 5.25401 12.998 4.54197 12.998 3.79954C12.998 3.05711 12.7031 2.34507 12.1783 1.82V1.82Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
});

AnchorIcon.displayName = "AnchorIcon";

export default AnchorIcon;