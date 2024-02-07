import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Columns = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-4,2v16h-6V4h6ZM2,17V7c0-1.654,1.346-3,3-3h2v16h-2c-1.654,0-3-1.346-3-3Zm20,0c0,1.654-1.346,3-3,3h-2V4h2c1.654,0,3,1.346,3,3v10Z" />
    </svg>
  );
});

Columns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Columns.displayName = 'Columns';

export default Columns;
