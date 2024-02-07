import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Puzzle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M13,24H11.431a1,1,0,0,1-.957-1.291A11.2,11.2,0,0,0,11,20a2,2,0,0,0-4,0,11.2,11.2,0,0,0,.526,2.709A1,1,0,0,1,6.569,24H5a5.006,5.006,0,0,1-5-5V11A5.006,5.006,0,0,1,5,6h.272A9.929,9.929,0,0,1,5,4a4,4,0,0,1,8,0,9.929,9.929,0,0,1-.272,2H13a5.006,5.006,0,0,1,5,4.773,10.01,10.01,0,0,1,2-.273,4,4,0,0,1,0,8,10.02,10.02,0,0,1-2-.272V19A5.006,5.006,0,0,1,13,24Zm-.272-2H13a3,3,0,0,0,3-3V16.931a1,1,0,0,1,1.291-.957A11.224,11.224,0,0,0,20,16.5a2,2,0,0,0,0-4,11.224,11.224,0,0,0-2.709.526A1,1,0,0,1,16,12.069V11a3,3,0,0,0-3-3H11.431a1,1,0,0,1-.957-1.291A11.2,11.2,0,0,0,11,4,2,2,0,0,0,7,4a11.2,11.2,0,0,0,.526,2.709A1,1,0,0,1,6.569,8H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3h.272A9.929,9.929,0,0,1,5,20a4,4,0,0,1,8,0A9.929,9.929,0,0,1,12.728,22Z" />
    </svg>
  );
});

Puzzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Puzzle.displayName = 'Puzzle';

export default Puzzle;
