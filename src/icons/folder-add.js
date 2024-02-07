import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FolderAdd = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m16 15a1 1 0 0 1 -1 1h-2v2a1 1 0 0 1 -2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1zm8-7v10a5.006 5.006 0 0 1 -5 5h-14a5.006 5.006 0 0 1 -5-5v-12a5.006 5.006 0 0 1 5-5h2.528a3.014 3.014 0 0 1 1.341.316l3.156 1.584a1.016 1.016 0 0 0 .447.1h6.528a5.006 5.006 0 0 1 5 5zm-22-2v1h19.816a3 3 0 0 0 -2.816-2h-6.528a3.014 3.014 0 0 1 -1.341-.316l-3.156-1.579a1.016 1.016 0 0 0 -.447-.105h-2.528a3 3 0 0 0 -3 3zm20 12v-9h-20v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3z" />
    </svg>
  );
});

FolderAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderAdd.displayName = 'FolderAdd';

export default FolderAdd;
