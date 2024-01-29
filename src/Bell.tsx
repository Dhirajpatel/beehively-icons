import React, {SVGProps} from "react";

interface BiBellProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiBell: React.FC<BiBellProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="m22.555 13.662-1.9-6.836A9.321 9.321 0 0 0 2.576 7.3l-1.471 6.615A5 5 0 0 0 5.986 20H7.1a5 5 0 0 0 9.8 0h.838a5 5 0 0 0 4.818-6.338ZM12 22a3 3 0 0 1-2.816-2h5.632A3 3 0 0 1 12 22m8.126-5.185A2.98 2.98 0 0 1 17.737 18H5.986a3 3 0 0 1-2.928-3.651l1.47-6.616a7.321 7.321 0 0 1 14.2-.372l1.9 6.836a2.98 2.98 0 0 1-.502 2.618" />
  </svg>
);
export default BiBell;
