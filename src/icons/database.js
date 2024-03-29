import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Database = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m24 11.5a4.476 4.476 0 0 0 -1.706-3.5 4.481 4.481 0 0 0 -2.794-8h-15a4.481 4.481 0 0 0 -2.794 8 4.443 4.443 0 0 0 0 7 4.481 4.481 0 0 0 2.794 8h15a4.481 4.481 0 0 0 2.794-8 4.476 4.476 0 0 0 1.706-3.5zm-22-7a2.5 2.5 0 0 1 2.5-2.5h.5v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h8.5a2.5 2.5 0 0 1 0 5h-15a2.5 2.5 0 0 1 -2.5-2.5zm20 14a2.5 2.5 0 0 1 -2.5 2.5h-15a2.5 2.5 0 0 1 0-5h.5v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h8.5a2.5 2.5 0 0 1 2.5 2.5zm-17.5-4.5a2.5 2.5 0 0 1 0-5h.5v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h8.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
});

Database.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Database.displayName = 'Database';

export default Database;
