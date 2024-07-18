import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15.5,24H5c-1.654,0-3-1.346-3-3V3C2,1.346,3.346,0,5,0h7.5c3.584,0,6.5,2.916,6.5,6.5,0,1.834-.764,3.494-1.99,4.677,2.858,.683,4.99,3.259,4.99,6.323,0,3.584-2.916,6.5-6.5,6.5ZM4,13v8c0,.551,.449,1,1,1H15.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H4Zm0-2H12.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H5c-.551,0-1,.449-1,1V11Z" />
    </svg>
  );
});

Bold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bold.displayName = 'Bold';

export default Bold;
