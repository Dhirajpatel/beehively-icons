import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mobile = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15,24h-6c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h6c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5ZM9,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3h-6Zm5,17h0c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1h0c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1Z" />
    </svg>
  );
});

Mobile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mobile.displayName = 'Mobile';

export default Mobile;
