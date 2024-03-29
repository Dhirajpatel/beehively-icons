import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UserTime = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m17 24a7 7 0 1 1 7-7 7.008 7.008 0 0 1 -7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0 -5-5zm1.707 6.707a1 1 0 0 0 0-1.414l-.707-.707v-1.586a1 1 0 0 0 -2 0v2a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414 0zm-16.707 4.293a8.3 8.3 0 0 1 6.221-8.024 1 1 0 0 0 -.442-1.952 10.213 10.213 0 0 0 -7.779 9.976 1 1 0 0 0 2 0zm6.474-12a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1 -5.5 5.5zm0-9a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0 -3.5-3.5z" />
    </svg>
  );
});

UserTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserTime.displayName = 'UserTime';

export default UserTime;
