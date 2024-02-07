import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UserMinus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m8,12c3.309,0,6-2.691,6-6S11.309,0,8,0,2,2.691,2,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm8,20v1c0,.552-.447,1-1,1s-1-.448-1-1v-1c0-3.309-2.691-6-6-6s-6,2.691-6,6v1c0,.552-.447,1-1,1s-1-.448-1-1v-1c0-4.411,3.589-8,8-8s8,3.589,8,8Zm8-10c0,.552-.447,1-1,1h-7c-.553,0-1-.448-1-1s.447-1,1-1h7c.553,0,1,.448,1,1Z" />
    </svg>
  );
});

UserMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserMinus.displayName = 'UserMinus';

export default UserMinus;
