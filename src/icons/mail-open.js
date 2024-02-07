import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MailOpen = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M22.459,8.1,15.535,1.464A5.026,5.026,0,0,0,8.48,1.449L1.54,8.1A5.028,5.028,0,0,0,0,11.708V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V11.708A5.025,5.025,0,0,0,22.459,8.1ZM9.879,2.878a3.013,3.013,0,0,1,4.258.016l6.747,6.464-6.763,6.764a3.074,3.074,0,0,1-4.242,0L3.115,9.358ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V11.708a3.014,3.014,0,0,1,.059-.578l6.406,6.406a5.024,5.024,0,0,0,7.07,0l6.406-6.406a3.014,3.014,0,0,1,.059.578Z" />
    </svg>
  );
});

MailOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MailOpen.displayName = 'MailOpen';

export default MailOpen;
