import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Flag = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M20.358,7.5l3.237-4.297c.459-.609,.533-1.413,.192-2.096s-1.026-1.107-1.79-1.107H4C1.794,0,0,1.794,0,4V23c0,.553,.448,1,1,1s1-.447,1-1V15H21.998c.764,0,1.449-.425,1.79-1.107s.267-1.486-.192-2.096l-3.237-4.297ZM2,13V4c0-1.103,.897-2,2-2H21.998l-3.69,4.898c-.268,.356-.268,.847,0,1.203l3.69,4.898H2Z" />
    </svg>
  );
});

Flag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Flag.displayName = 'Flag';

export default Flag;
