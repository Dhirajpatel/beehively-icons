import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MoreHorizontal = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <circle cx="12" cy="12" r="2" />
      <circle cx="4.8" cy="12" r="2" />
      <circle cx="19.2" cy="12" r="2" />
    </svg>
  );
});

MoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoreHorizontal.displayName = 'MoreHorizontal';

export default MoreHorizontal;
