import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BallotCheck = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m11.696,11.718l-1.862,1.805c-.318.318-.74.478-1.163.478-.427,0-.856-.163-1.183-.489l-.681-.654c-.398-.383-.411-1.016-.028-1.414.383-.398,1.017-.41,1.414-.028l.473.455,1.638-1.588c.396-.383,1.029-.375,1.414.022.384.396.375,1.029-.022,1.414Zm4.304,5.282h-3c-.552,0-1,.448-1,1s.448,1,1,1h3c.552,0,1-.448,1-1s-.448-1-1-1Zm0-12h-3c-.552,0-1,.448-1,1s.448,1,1,1h3c.552,0,1-.448,1-1s-.448-1-1-1Zm0,6h-2c-.552,0-1,.448-1,1s.448,1,1,1h2c.552,0,1-.448,1-1s-.448-1-1-1Zm-7.5,5.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm0-9c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm13.5-2.5v14c0,2.757-2.243,5-5,5H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V5Z" />
    </svg>
  );
});

BallotCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BallotCheck.displayName = 'BallotCheck';

export default BallotCheck;
