import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GripDotsVertical = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <circle cx="8.3" cy="4.6" r="2.1" />
      <circle cx="8.3" cy="12" r="2.1" />
      <circle cx="8.3" cy="19.4" r="2.1" />
      <circle cx="15.7" cy="4.6" r="2.1" />
      <circle cx="15.7" cy="12" r="2.1" />
      <circle cx="15.7" cy="19.4" r="2.1" />
    </svg>
  );
});

GripDotsVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GripDotsVertical.displayName = 'GripDotsVertical';

export default GripDotsVertical;
