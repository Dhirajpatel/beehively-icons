import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Underline = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12,20a8.009,8.009,0,0,0,8-8V1a1,1,0,0,0-2,0V12A6,6,0,0,1,6,12V1A1,1,0,0,0,4,1V12A8.009,8.009,0,0,0,12,20Z" />
      <path d="M23,22H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
    </svg>
  );
});

Underline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Underline.displayName = 'Underline';

export default Underline;
