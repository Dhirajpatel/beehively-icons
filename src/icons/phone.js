import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Phone = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path
        d="M1.8,1.8l1-0.9c1.2-1.2,3.2-1.2,4.4,0c0,0,1.9,2.4,1.9,2.4c1.1,1.2,1.1,3.1,0,4.3L8,9.1c1.5,3.3,3.7,5.6,6.9,6.9l1.5-1.2
	c1.2-1.1,3.1-1.1,4.3,0c0,0,2.4,1.9,2.4,1.9c1.2,1.2,1.2,3.2,0.1,4.3l-1,1.1C21,23.4,19.4,24,17.8,24C10.1,24,0,13.9,0,6.2
	C0,4.6,0.6,3,1.8,1.8L1.8,1.8z M17.8,22c1.1,0,2.2-0.4,2.9-1.1l1-1.1c0.4-0.4,0.4-1.1,0-1.5c0,0-2.4-1.8-2.4-1.9
	c-0.4-0.4-1.1-0.4-1.6,0c0,0-2,1.6-2,1.6c-0.3,0.2-0.7,0.3-1,0.1c-4.1-1.6-7.1-4.5-8.8-8.8C5.8,9,5.8,8.6,6,8.3c0,0,1.6-2,1.6-2
	c0.4-0.4,0.4-1.1,0-1.6c0,0-1.9-2.4-1.9-2.4C5.4,1.9,4.7,1.9,4.2,2.4l-1,0.9C2.4,4,2,5.1,2,6.2C2,13.2,11.8,22,17.8,22L17.8,22z"
      />
    </svg>
  );
});

Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Phone.displayName = 'Phone';

export default Phone;
