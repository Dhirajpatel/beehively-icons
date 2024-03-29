import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CaretLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z" />
    </svg>
  );
});

CaretLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretLeft.displayName = 'CaretLeft';

export default CaretLeft;
