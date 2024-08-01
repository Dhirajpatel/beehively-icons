import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CardEmpty = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M21,5v14c0,2.8-2.2,5-5,5h-8c-2.8,0-5-2.2-5-5V5C3,2.2,5.2,0,8,0h8c2.8,0,5,2.2,5,5ZM19,5c0-1.7-1.3-3-3-3h-8c-1.7,0-3,1.3-3,3v14c0,1.7,1.3,3,3,3h8c1.7,0,3-1.3,3-3V5Z" />
    </svg>
  );
});

CardEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CardEmpty.displayName = 'CardEmpty';

export default CardEmpty;
