import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cake = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M23,22H22V14a5.006,5.006,0,0,0-5-5H13V6.039A2.5,2.5,0,0,0,14.5,3.75,7.293,7.293,0,0,0,12.738.327a1,1,0,0,0-1.476,0A7.293,7.293,0,0,0,9.5,3.75,2.5,2.5,0,0,0,11,6.039V9H7a5.006,5.006,0,0,0-5,5v8H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2ZM7,11H17a3,3,0,0,1,3,3v1.98c-.936-.1-1.5-.7-1.5-.98a1,1,0,0,0-2,0c0,.343-.682,1-1.75,1C13.661,16,13,15.306,13,15a1,1,0,0,0-2,0c0,.343-.682,1-1.75,1-1.089,0-1.75-.694-1.75-1a1,1,0,0,0-2,0c0,.315-.579.888-1.5.981V14A3,3,0,0,1,7,11ZM4,17.979A4.156,4.156,0,0,0,6.5,17a4.309,4.309,0,0,0,5.5.015A4.309,4.309,0,0,0,17.5,17a4.156,4.156,0,0,0,2.5.978V22H4Z" />
    </svg>
  );
});

Cake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cake.displayName = 'Cake';

export default Cake;
