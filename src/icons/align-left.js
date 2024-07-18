import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M1,6H23a1,1,0,0,0,0-2H1A1,1,0,0,0,1,6Z" />
      <path d="M1,11H15a1,1,0,0,0,0-2H1a1,1,0,0,0,0,2Z" />
      <path d="M15,19H1a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z" />
      <path d="M23,14H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
    </svg>
  );
});

AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignLeft.displayName = 'AlignLeft';

export default AlignLeft;
