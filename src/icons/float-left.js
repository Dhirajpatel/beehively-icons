import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FloatLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15,6h8c.6,0,1-.4,1-1s-.4-1-1-1h-8c-.6,0-1,.4-1,1s.4,1,1,1Z" />
      <path d="M23,11h-8c-.6,0-1,.4-1,1s.4,1,1,1h8c.6,0,1-.4,1-1s-.4-1-1-1Z" />
      <path d="M23,18h-8c-.6,0-1,.4-1,1s.4,1,1,1h8c.6,0,1-.4,1-1s-.4-1-1-1Z" />
      <path d="M4,3h3c2.2,0,4,1.8,4,4v10c0,2.2-1.8,4-4,4h-3C1.8,21,0,19.2,0,17V7C0,4.8,1.8,3,4,3ZM2,17c0,1.1.9,2,2,2h3c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2h-3c-1.1,0-2,.9-2,2v10Z" />
    </svg>
  );
});

FloatLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FloatLeft.displayName = 'FloatLeft';

export default FloatLeft;
