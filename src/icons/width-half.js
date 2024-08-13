import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WidthHalf = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M6.5,8v-3c0-2.2,1.8-4,4-4h3c2.2,0,4,1.8,4,4v3c0,2.2-1.8,4-4,4h-3c-2.2,0-4-1.8-4-4ZM13.5,10c1.1,0,2-.9,2-2v-3c0-1.1-.9-2-2-2h-3c-1.1,0-2,.9-2,2v3c0,1.1.9,2,2,2h3Z" />
      <path d="M3.6,16.9c0-.3-.2-.5-.5-.5-.1,0-.3,0-.4.1l-2.4,2.4c-.4.4-.4,1,0,1.4l2.4,2.4c.2.2.5.2.7,0,0,0,.1-.2.1-.4v-1.8h16.8v1.8c0,.3.2.5.5.5.1,0,.3,0,.4-.1l2.4-2.4c.4-.4.4-1,0-1.4l-2.4-2.4c-.2-.2-.5-.2-.7,0,0,0-.1.2-.1.4v1.8H3.6v-1.8Z" />
    </svg>
  );
});

WidthHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WidthHalf.displayName = 'WidthHalf';

export default WidthHalf;
