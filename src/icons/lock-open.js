import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LockOpen = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m10,15v2c0,.553-.448,1-1,1s-1-.447-1-1v-2c0-.553.448-1,1-1s1,.447,1,1Zm13.123-9.006c-.539.06-1.043-.336-1.103-.885-.191-1.744-1.737-3.109-3.52-3.109-1.93,0-3.5,1.57-3.5,3.5v2.918c1.764.773,3,2.536,3,4.582v6c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-6c0-2.757,2.243-5,5-5h8v-2.5c0-3.032,2.467-5.5,5.5-5.5,2.834,0,5.202,2.103,5.508,4.891.06.549-.336,1.043-.885,1.104Zm-10.123,4.006H5c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3h8c1.654,0,3-1.346,3-3v-6c0-1.654-1.346-3-3-3Z" />
    </svg>
  );
});

LockOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LockOpen.displayName = 'LockOpen';

export default LockOpen;
