import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ticket = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...rest}
    >
      <path d="M19,21H5c-2.757,0-5-2.243-5-5v-.922c0-.552,.448-1,1-1,.024,0,.053,.001,.082,.003,1.106-.021,2-.928,2-2.04s-.894-2.02-2-2.041c-.029,.002-.058,.003-.081,.003-.552,0-1-.448-1-1v-1.004C0,5.243,2.243,3,5,3h14c2.757,0,5,2.243,5,5v1c0,.552-.448,1-1,1-1.103,0-2,.897-2,2s.897,2,2,2c.552,0,1,.448,1,1v1c0,2.757-2.243,5-5,5ZM2,15.967v.033c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-.126c-1.723-.445-3-2.013-3-3.874s1.277-3.428,3-3.874v-.126c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v.115c1.767,.432,3.082,2.028,3.082,3.926s-1.315,3.494-3.082,3.926Z" />
    </svg>
  );
});

Ticket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ticket.displayName = 'Ticket';

export default Ticket;
