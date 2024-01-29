import React, {SVGProps} from "react";

interface BiPenNibProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiPenNib: React.FC<BiPenNibProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M23.707 7.293a1 1 0 0 0-1.414 0L20 9.586 14.414 4l2.293-2.293A.999.999 0 1 0 15.293.293l-2.845 2.845-5.863 2.169a5.02 5.02 0 0 0-3.073 3.317L.111 20.545a2.69 2.69 0 0 0 .68 2.664 2.69 2.69 0 0 0 2.655.682l11.884-3.377a5.02 5.02 0 0 0 3.315-3.054l2.215-5.907 2.846-2.846a1 1 0 0 0 0-1.414Zm-6.935 9.465a3.01 3.01 0 0 1-1.989 1.833l-11.12 3.16 5.818-5.818q.248.067.518.068a2 2 0 1 0-1.932-1.482L2.25 20.336 5.434 9.175a3.01 3.01 0 0 1 1.844-1.991l5.467-2.023 6.091 6.091z" />
  </svg>
);
export default BiPenNib;
