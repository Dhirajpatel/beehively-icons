import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mic = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M12,2c0.7,0,1.2,0.5,1.2,1.2v8c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2v-8C10.8,2.5,11.3,2,12,2 M12,0
		c-1.8,0-3.2,1.4-3.2,3.2v8c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2v-8C15.2,1.4,13.8,0,12,0L12,0z"
      />
      <path
        d="M21,11.2c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,3.9-3.1,7-7,7c-1.6,0-3.4-0.7-4.7-1.8C6.3,15.5,5,13.9,5,11.2c0-0.6-0.4-1-1-1h0
	c-0.6,0-1,0.4-1,1c0,3.4,1.6,5.6,3,6.8c1.4,1.2,3.2,2,5,2.2l0,2.9c0,0.6,0.4,1,1,1c0,0,0,0,0,0c0.6,0,1-0.4,1-1l0-2.9
	C17.5,19.6,21,15.8,21,11.2z"
      />
    </svg>
  );
});

Mic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mic.displayName = 'Mic';

export default Mic;
