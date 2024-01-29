import React, {SVGProps} from "react";

interface BiBulbProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiBulb: React.FC<BiBulbProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M17.994 2.286A9 9 0 0 0 3.075 7.822a8.94 8.94 0 0 0 2.793 7.761A6.26 6.26 0 0 1 8 20.149v.161A3.694 3.694 0 0 0 11.69 24h.62A3.694 3.694 0 0 0 16 20.31v-.549a5.32 5.32 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zM12.31 22h-.62A1.69 1.69 0 0 1 10 20.31s-.007-.26-.008-.31H14v.31A1.69 1.69 0 0 1 12.31 22m4.3-7.741A7.67 7.67 0 0 0 14.246 18H13v-7.184A3 3 0 0 0 15 8a1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 2 2.816V18H9.678a8.63 8.63 0 0 0-2.448-3.881 7 7 0 0 1 3.951-12.073A8 8 0 0 1 12.009 2a6.92 6.92 0 0 1 4.652 1.778 6.993 6.993 0 0 1-.048 10.481z" />
  </svg>
);
export default BiBulb;
