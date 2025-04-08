import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MessagesPremium = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19,4h-1.1c-.5-2.3-2.5-4-4.9-4h-8C2.2,0,0,2.2,0,5v12.9c0,.8.4,1.5,1.1,1.9.3.2.7.2,1,.2s.8-.1,1.2-.4l3-2c.7,1.9,2.5,3.3,4.7,3.3h5.7l4,2.6c.4.2.8.4,1.2.4s.7,0,1-.2c.7-.4,1.1-1.1,1.1-1.9v-12.9c0-2.8-2.2-5-5-5h0,0ZM2.2,18s0,0-.2,0c0,0,0-.1,0-.1V5c0-1.7,1.4-3,3-3h8c1.7,0,3,1.4,3,3v7c0,1.7-1.3,3-3,3h-6c-.2,0-.4,0-.5.2l-4.2,2.8h0,0ZM22,21.9s0,0,0,.1-.1,0-.2,0l-4.2-2.8c-.2-.1-.4-.2-.5-.2h-6c-1.3,0-2.4-.8-2.8-2h4.8c2.8,0,5-2.2,5-5v-6h1c1.7,0,3,1.4,3,3v12.9h0,0ZM5.1,7.6c.1-.3.4-.6.8-.6h1.9l.6-1.8c.1-.3.4-.6.8-.6s.7.2.8.6l.6,1.8h1.9c.4,0,.7.2.8.6.1.3,0,.7-.3.9l-1.5,1.1.6,1.8c.1.3,0,.7-.3.9s-.7.2-1,0l-1.5-1.1-1.5,1.1c-.3.2-.7.2-1,0-.3-.2-.4-.6-.3-.9l.6-1.8-1.5-1.1c-.3-.2-.4-.6-.3-.9h0Z" />
    </svg>
  );
});

MessagesPremium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MessagesPremium.displayName = 'MessagesPremium';

export default MessagesPremium;
