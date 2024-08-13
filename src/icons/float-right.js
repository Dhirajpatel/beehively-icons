import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FloatRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M1,6h8c.6,0,1-.4,1-1s-.4-1-1-1H1c-.6,0-1,.4-1,1s.4,1,1,1Z" />
      <path d="M9,11H1c-.6,0-1,.4-1,1s.4,1,1,1h8c.6,0,1-.4,1-1s-.4-1-1-1Z" />
      <path d="M9,18H1c-.6,0-1,.4-1,1s.4,1,1,1h8c.6,0,1-.4,1-1s-.4-1-1-1Z" />
      <path d="M17,3h3c2.2,0,4,1.8,4,4v10c0,2.2-1.8,4-4,4h-3c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4ZM15,17c0,1.1.9,2,2,2h3c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2h-3c-1.1,0-2,.9-2,2v10Z" />
    </svg>
  );
});

FloatRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FloatRight.displayName = 'FloatRight';

export default FloatRight;
