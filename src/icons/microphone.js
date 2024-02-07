import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Microphone = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12,20a8.009,8.009,0,0,0,8-8V8A8,8,0,0,0,4,8v4A8.009,8.009,0,0,0,12,20ZM12,2a6.006,6.006,0,0,1,5.91,5H15a1,1,0,0,0,0,2h3v2H15a1,1,0,0,0,0,2h2.91A5.993,5.993,0,0,1,6.09,13H9a1,1,0,0,0,0-2H6V9H9A1,1,0,0,0,9,7H6.09A6.006,6.006,0,0,1,12,2Z" />
      <path d="M23,12a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9H11a9.011,9.011,0,0,1-9-9,1,1,0,0,0-2,0A11.013,11.013,0,0,0,11,24h2A11.013,11.013,0,0,0,24,13,1,1,0,0,0,23,12Z" />
    </svg>
  );
});

Microphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Microphone.displayName = 'Microphone';

export default Microphone;
