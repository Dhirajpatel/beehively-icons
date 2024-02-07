import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Music = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M22.554.923A3.978,3.978,0,0,0,19.263.07L10.079,1.792A5,5,0,0,0,6,6.706v9.85A3.959,3.959,0,0,0,4,16a4,4,0,1,0,4,4V10.876A2,2,0,0,1,9.632,8.91l11.183-2.1A1,1,0,0,1,22,7.8v5.76A3.959,3.959,0,0,0,20,13a4,4,0,1,0,4,4V4A3.987,3.987,0,0,0,22.554.923ZM4,22a2,2,0,1,1,2-2A2,2,0,0,1,4,22ZM20.447,4.848,9.263,6.944A4,4,0,0,0,8,7.416v-.71a3,3,0,0,1,2.447-2.949l9.185-1.722A2,2,0,0,1,22,4v.984A2.955,2.955,0,0,0,20.447,4.848ZM20,19a2,2,0,1,1,2-2A2,2,0,0,1,20,19Z" />
    </svg>
  );
});

Music.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Music.displayName = 'Music';

export default Music;
