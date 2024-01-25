import React, { SVGProps } from 'react';

interface BiDirectionSignalProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiDirectionSignal: React.FC<BiDirectionSignalProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="m22.707 13.793-1.914-1.914A2.98 2.98 0 0 0 18.671 11H13V9h6.5C20.878 9 22 7.878 22 6.5v-2C22 3.122 20.878 2 19.5 2h-6.506L13 1.006A1 1 0 0 0 12.005 0H12a1 1 0 0 0-1 .994L10.994 2H5.328c-.801 0-1.555.312-2.122.879L1.292 4.793a1 1 0 0 0 0 1.414l1.914 1.914c.566.567 1.32.879 2.122.879h5.671v2h-6.5a2.503 2.503 0 0 0-2.5 2.5v2c0 1.378 1.122 2.5 2.5 2.5h6.491l.009 5.002a1 1 0 0 0 1 .998h.002a1 1 0 0 0 .998-1.002L12.99 18h5.681c.801 0 1.555-.312 2.122-.879l1.914-1.914a1 1 0 0 0 0-1.414M4.621 6.707 3.414 5.5l1.207-1.207A1 1 0 0 1 5.329 4H19.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5.329a1 1 0 0 1-.708-.293m14.758 9a1 1 0 0 1-.708.293H4.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h14.171c.267 0 .519.104.708.293l1.207 1.207z" />
  </svg>
);
export default BiDirectionSignal;
