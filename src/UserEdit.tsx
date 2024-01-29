import React, {SVGProps} from "react";

interface BiUserEditProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiUserEdit: React.FC<BiUserEditProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6M9 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4m1.75 14.22A7.008 7.008 0 0 0 2 23a1 1 0 0 1-2 0c0-4.962 4.038-9 9-9 .762 0 1.519.095 2.25.284a1 1 0 0 1-.499 1.937Zm12.371-4.341c-1.134-1.134-3.11-1.134-4.243 0l-6.707 6.707a3.98 3.98 0 0 0-1.172 2.829v1.586a1 1 0 0 0 1 1h1.586a3.97 3.97 0 0 0 2.828-1.172l6.707-6.707c.567-.567.879-1.32.879-2.122s-.312-1.555-.878-2.121m-1.415 2.828-6.708 6.707a1.98 1.98 0 0 1-1.414.586h-.586v-.586c0-.534.208-1.036.586-1.414l6.708-6.707a1.023 1.023 0 0 1 1.414 0c.189.188.293.439.293.707s-.104.518-.293.707" />
  </svg>
);
export default BiUserEdit;
