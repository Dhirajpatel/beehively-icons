import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BookPremium = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M17,0H7C4.2,0,2,2.2,2,5v15c0,2.2,1.8,4,4,4h11c2.8,0,5-2.2,5-5V5c0-2.8-2.2-5-5-5ZM20,5v11H8V2h9c1.7,0,3,1.3,3,3ZM6,2.2v13.8c-.7,0-1.4.2-2,.5V5c0-1.3.8-2.4,2-2.8h0ZM17,22H6c-1.1,0-2-.9-2-2s.9-2,2-2h14v1c0,1.7-1.3,3-3,3h0ZM10.1,8c.1-.3.4-.6.8-.6h1.9l.6-1.8c.1-.3.4-.6.8-.6s.7.2.8.6l.6,1.8h1.9c.4,0,.7.2.8.6.1.3,0,.7-.3.9l-1.5,1.1.6,1.8c.1.3,0,.7-.3.9s-.7.2-1,0l-1.5-1.1-1.5,1.1c-.3.2-.7.2-1,0-.3-.2-.4-.6-.3-.9l.6-1.8-1.5-1.1c-.3-.2-.4-.6-.3-.9h0Z" />
    </svg>
  );
});

BookPremium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookPremium.displayName = 'BookPremium';

export default BookPremium;
