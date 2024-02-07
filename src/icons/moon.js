import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Moon = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z" />
    </svg>
  );
});

Moon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Moon.displayName = 'Moon';

export default Moon;
