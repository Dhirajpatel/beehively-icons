import React, {SVGProps} from "react";

interface BiUmbrellaProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiUmbrella: React.FC<BiUmbrellaProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M23.717 9.549A12.83 12.83 0 0 0 13 2.043V1a1 1 0 0 0-2 0v1.043A12.84 12.84 0 0 0 .267 9.549a3.95 3.95 0 0 0 .405 3.682A4.01 4.01 0 0 0 4 15h7v6a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0v-6h6.983a4.02 4.02 0 0 0 3.329-1.769 3.95 3.95 0 0 0 .405-3.682m-2.061 2.561a2 2 0 0 1-1.673.89H4a1.99 1.99 0 0 1-1.673-.891 1.93 1.93 0 0 1-.2-1.818C3.581 6.646 7.734 4 12 4a10.81 10.81 0 0 1 9.859 6.291 1.92 1.92 0 0 1-.203 1.819" />
  </svg>
);
export default BiUmbrella;
