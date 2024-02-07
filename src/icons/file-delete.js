import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileDelete = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15.207,14.207,13.414,16l1.793,1.793a1,1,0,1,1-1.414,1.414L12,17.414l-1.793,1.793a1,1,0,0,1-1.414-1.414L10.586,16,8.793,14.207a1,1,0,0,1,1.414-1.414L12,14.586l1.793-1.793a1,1,0,0,1,1.414,1.414ZM22,10.485V19a5.006,5.006,0,0,1-5,5H7a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,7,0h4.515a6.958,6.958,0,0,1,4.95,2.05l3.484,3.486A6.951,6.951,0,0,1,22,10.485ZM15.051,3.464A5.01,5.01,0,0,0,14,2.684V7a1,1,0,0,0,1,1h4.316a4.983,4.983,0,0,0-.781-1.05ZM20,10.485c0-.165-.032-.323-.047-.485H15a3,3,0,0,1-3-3V2.047C11.838,2.032,11.679,2,11.515,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z" />
    </svg>
  );
});

FileDelete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileDelete.displayName = 'FileDelete';

export default FileDelete;
