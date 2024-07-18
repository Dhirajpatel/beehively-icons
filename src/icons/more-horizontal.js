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
      <circle cx="256" cy="256" r="42.7" />
      <circle cx="106.7" cy="256" r="42.7" />
      <circle cx="405.3" cy="256" r="42.7" />
    </svg>
  );
});

MoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoreHorizontal.displayName = 'MoreHorizontal';

export default MoreHorizontal;
