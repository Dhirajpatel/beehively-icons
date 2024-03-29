import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Devices = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12,17v4c0,.55-.45,1-1,1H7c-.55,0-1-.45-1-1s.45-1,1-1h3v-2H5c-2.76,0-5-2.24-5-5V6C0,3.24,2.24,1,5,1h12c2.76,0,5,2.24,5,5,0,.55-.45,1-1,1s-1-.45-1-1c0-1.65-1.35-3-3-3H5c-1.65,0-3,1.35-3,3v7c0,1.65,1.35,3,3,3h6c.55,0,1,.45,1,1Zm12-4v7c0,2.21-1.79,4-4,4h-2c-2.21,0-4-1.79-4-4v-7c0-2.21,1.79-4,4-4h2c2.21,0,4,1.79,4,4Zm-2,0c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v7c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-7Z" />
    </svg>
  );
});

Devices.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Devices.displayName = 'Devices';

export default Devices;
