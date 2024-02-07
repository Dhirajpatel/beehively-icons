import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileCheck = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m19.95 5.536-3.486-3.486a6.954 6.954 0 0 0 -4.949-2.05h-4.515a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515a6.954 6.954 0 0 0 -2.05-4.949zm-1.414 1.414a5.018 5.018 0 0 1 .781 1.05h-4.317a1 1 0 0 1 -1-1v-4.317a5.018 5.018 0 0 1 1.05.781zm1.464 12.05a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h4.515c.165 0 .323.032.485.047v4.953a3 3 0 0 0 3 3h4.953c.015.162.047.32.047.485zm-3.276-5.689a1 1 0 0 1 -.035 1.413l-3.589 3.414a3 3 0 0 1 -4.226-.017l-1.54-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.6-3.431a1 1 0 0 1 1.417.035z" />
    </svg>
  );
});

FileCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileCheck.displayName = 'FileCheck';

export default FileCheck;
