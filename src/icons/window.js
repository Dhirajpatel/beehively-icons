import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Window = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19,1H5C2.24,1,0,3.24,0,6v12c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V6c0-2.76-2.24-5-5-5ZM5,3h14c1.65,0,3,1.35,3,3v2H2v-2c0-1.65,1.35-3,3-3Zm14,18H5c-1.65,0-3-1.35-3-3V10H22v8c0,1.65-1.35,3-3,3Zm-1-15.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Zm-4,0c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Zm-4,0c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Z" />
    </svg>
  );
});

Window.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Window.displayName = 'Window';

export default Window;
