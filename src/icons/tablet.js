import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tablet = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m16,0h-8C5.243,0,3,2.243,3,5v14c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3h-8c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3v14Zm-5,0c0,.552-.447,1-1,1h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c.553,0,1,.448,1,1Z" />
    </svg>
  );
});

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tablet.displayName = 'Tablet';

export default Tablet;
