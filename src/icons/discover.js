import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Discover = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m21.17,19.756c.524-.791.83-1.738.83-2.756,0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5c1.018,0,1.965-.306,2.756-.83l2.537,2.537c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-2.537-2.537Zm-7.17-2.756c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3ZM6,4.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm4,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5ZM19,0H5C2.243,0,0,2.243,0,5v12c0,2.757,2.243,5,5,5h5c.553,0,1-.447,1-1s-.447-1-1-1h-5c-1.654,0-3-1.346-3-3v-8h20v3c0,.552.447,1,1,1s1-.448,1-1v-7c0-2.757-2.243-5-5-5ZM2,7v-2c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v2H2Z" />
    </svg>
  );
});

Discover.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Discover.displayName = 'Discover';

export default Discover;
