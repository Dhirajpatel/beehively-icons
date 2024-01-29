import React, {SVGProps} from "react";

interface BiBellOffProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiBellOff: React.FC<BiBellOffProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M16.034 21.42A4.46 4.46 0 0 1 12 24a4.45 4.45 0 0 1-4.42-4H6.051a5.02 5.02 0 0 1-3.939-1.891 5.03 5.03 0 0 1-.991-4.254l1.323-5.106a1 1 0 0 1 1.936.502l-1.314 5.071a3.02 3.02 0 0 0 .607 2.536A3.03 3.03 0 0 0 6.052 18h6.949a1 1 0 0 1 0 2H9.6a2.446 2.446 0 0 0 2.401 2c.949 0 1.82-.557 2.219-1.42a1 1 0 0 1 1.815.84Zm7.673 2.287a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l3.065 3.065A9.4 9.4 0 0 1 12 0a9.454 9.454 0 0 1 9.082 6.902l1.737 6.714a5.01 5.01 0 0 1-.849 4.388 5.1 5.1 0 0 1-1.329 1.222l3.066 3.066a1 1 0 0 1 0 1.414ZM6.194 4.78l12.971 12.971a3 3 0 0 0 1.211-.954 3.03 3.03 0 0 0 .511-2.662l-1.736-6.714c-.885-3.184-3.827-5.42-7.15-5.42a7.4 7.4 0 0 0-5.806 2.78Z" />
  </svg>
);
export default BiBellOff;
