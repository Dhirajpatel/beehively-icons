import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GlobePremium = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12,12-5.4,12-12C24,5.4,18.6,0,12,0ZM20.6,7h-3.2c-.7-1.7-1.7-3.2-2.8-4.6,2.5.7,4.7,2.4,6,4.6h0ZM16.5,12c0,1-.2,2-.5,3H8c-.3-1-.5-2-.5-3,0-1,.2-2,.5-3h8c.3,1,.5,2,.5,3ZM8.8,17h6.4c-.8,1.7-1.9,3.2-3.2,4.6-1.3-1.4-2.4-2.9-3.2-4.6h0ZM8.8,7c.8-1.7,1.9-3.2,3.2-4.6,1.3,1.4,2.4,2.9,3.2,4.6h-6.4,0ZM9.4,2.4c-1.2,1.4-2.1,3-2.8,4.6h-3.2c1.3-2.3,3.5-4,6-4.6ZM2.5,9h3.4c-.3,1-.4,2-.4,3,0,1,.1,2,.4,3h-3.4c-.6-2-.6-4,0-6ZM3.4,17h3.2c.7,1.7,1.7,3.2,2.8,4.6-2.5-.7-4.7-2.4-6-4.6ZM14.6,21.6c1.1-1.4,2.1-3,2.8-4.6h3.2c-1.3,2.3-3.5,4-6,4.6h0ZM21.5,15h-3.4c.3-1,.4-2,.4-3,0-1-.1-2-.4-3h3.4c.6,2,.6,4,0,6h0ZM9.8,11.4c0-.2.2-.3.4-.3h1l.3-1c0-.2.2-.3.4-.3s.4.1.4.3l.3,1h1c.2,0,.4.1.4.3,0,.2,0,.4-.2.5l-.9.6.3,1c0,.2,0,.4-.2.5-.2.1-.4.1-.5,0l-.8-.6-.8.6c-.2.1-.4.1-.5,0-.2-.1-.2-.3-.2-.5l.3-1-.9-.6c-.2-.1-.2-.3-.2-.5h0Z" />
    </svg>
  );
});

GlobePremium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GlobePremium.displayName = 'GlobePremium';

export default GlobePremium;
