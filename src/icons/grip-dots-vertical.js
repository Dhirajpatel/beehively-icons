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
      <circle cx="181.2" cy="106.4" r="42.7" />
      <circle cx="181.2" cy="255.7" r="42.7" />
      <circle cx="181.2" cy="405" r="42.7" />
      <circle cx="330.8" cy="107" r="42.7" />
      <circle cx="330.8" cy="256.3" r="42.7" />
      <circle cx="330.8" cy="405.6" r="42.7" />
    </svg>
  );
});

GripDotsVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GripDotsVertical.displayName = 'GripDotsVertical';

export default GripDotsVertical;
