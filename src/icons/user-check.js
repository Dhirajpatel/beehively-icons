import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UserCheck = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m8,12c3.309,0,6-2.691,6-6S11.309,0,8,0,2,2.691,2,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm8,20v1c0,.552-.448,1-1,1s-1-.448-1-1v-1c0-3.309-2.691-6-6-6s-6,2.691-6,6v1c0,.552-.448,1-1,1s-1-.448-1-1v-1c0-4.411,3.589-8,8-8s8,3.589,8,8Zm7.697-11.783l-3.992,3.875c-.581.582-1.368.907-2.205.907s-1.624-.326-2.215-.917l-1.971-1.854c-.402-.378-.421-1.011-.042-1.414.379-.402,1.011-.421,1.414-.042l1.992,1.875c.471.47,1.195.449,1.623.021l4.002-3.886c.396-.385,1.029-.375,1.414.021.385.396.375,1.03-.021,1.414Z" />
    </svg>
  );
});

UserCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserCheck.displayName = 'UserCheck';

export default UserCheck;
