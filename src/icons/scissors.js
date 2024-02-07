import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Scissors = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m19 14a4.929 4.929 0 0 0 -2.352.615l-3.348-4.015 7.467-8.96a1 1 0 0 0 -1.536-1.28l-7.231 8.678-7.232-8.678a1 1 0 0 0 -1.536 1.28l7.468 8.96-3.348 4.015a4.941 4.941 0 0 0 -2.352-.615 5 5 0 1 0 5 5 4.947 4.947 0 0 0 -1.112-3.1l3.112-3.738 3.111 3.738a4.955 4.955 0 0 0 -1.111 3.1 5 5 0 1 0 5-5zm-14 8a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm14 0a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z" />
    </svg>
  );
});

Scissors.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Scissors.displayName = 'Scissors';

export default Scissors;
