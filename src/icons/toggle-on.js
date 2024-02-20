import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ToggleOn = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m16,4h-8C3.589,4,0,7.589,0,12s3.589,8,8,8h8c4.411,0,8-3.589,8-8s-3.589-8-8-8Zm0,14h-8c-3.309,0-6-2.691-6-6s2.691-6,6-6h8c3.309,0,6,2.691,6,6s-2.691,6-6,6Zm4-6c0,2.206-1.794,4-4,4s-4-1.794-4-4,1.794-4,4-4,4,1.794,4,4Z" />
    </svg>
  );
});

ToggleOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ToggleOn.displayName = 'ToggleOn';

export default ToggleOn;
