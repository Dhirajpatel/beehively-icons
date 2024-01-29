import React, {SVGProps} from "react";

interface BiTicketProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiTicket: React.FC<BiTicketProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M19 21H5c-2.757 0-5-2.243-5-5v-.922a1 1 0 0 1 1.082-.997c1.106-.021 2-.928 2-2.04s-.894-2.02-2-2.041l-.081.003a1 1 0 0 1-1-1V7.999A5.004 5.004 0 0 1 5 3h14c2.757 0 5 2.243 5 5v1a1 1 0 0 1-1 1c-1.103 0-2 .897-2 2s.897 2 2 2a1 1 0 0 1 1 1v1c0 2.757-2.243 5-5 5M2 15.967V16c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-.126c-1.723-.445-3-2.013-3-3.874s1.277-3.428 3-3.874V8c0-1.654-1.346-3-3-3H5C3.346 5 2 6.346 2 8v.115c1.767.432 3.082 2.028 3.082 3.926S3.767 15.535 2 15.967" />
  </svg>
);
export default BiTicket;
