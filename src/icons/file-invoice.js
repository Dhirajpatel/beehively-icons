import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileInvoice = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19.95,5.536l-3.485-3.485c-1.322-1.322-3.08-2.05-4.95-2.05H7C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5V10.485c0-1.87-.728-3.627-2.05-4.95Zm-1.414,1.414c.318,.318,.587,.671,.805,1.05h-4.341c-.551,0-1-.449-1-1V2.659c.379,.218,.733,.487,1.05,.805l3.485,3.485Zm1.464,12.05c0,1.654-1.346,3-3,3H7c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h4.515c.163,0,.325,.008,.485,.023V7c0,1.654,1.346,3,3,3h4.977c.015,.16,.023,.322,.023,.485v8.515Zm-4.5-6h-7c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h7c1.378,0,2.5-1.122,2.5-2.5v-2c0-1.378-1.122-2.5-2.5-2.5Zm.5,4.5c0,.276-.224,.5-.5,.5h-7c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h7c.276,0,.5,.224,.5,.5v2ZM6,10c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1h-2c-.552,0-1-.448-1-1Zm0-4c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1h-2c-.552,0-1-.448-1-1Z" />
    </svg>
  );
});

FileInvoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileInvoice.displayName = 'FileInvoice';

export default FileInvoice;
