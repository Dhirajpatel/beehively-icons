import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DirectionSignal = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m22.707,13.793l-1.914-1.914c-.566-.567-1.32-.879-2.122-.879h-5.671v-2h6.5c1.378,0,2.5-1.122,2.5-2.5v-2c0-1.378-1.122-2.5-2.5-2.5h-6.506l.006-.994c.003-.553-.442-1.003-.995-1.006h-.005c-.55,0-.997.444-1,.994l-.006,1.006h-5.666c-.801,0-1.555.312-2.122.879l-1.914,1.914c-.391.391-.391,1.023,0,1.414l1.914,1.914c.566.567,1.32.879,2.122.879h5.671v2h-6.5c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h6.491l.009,5.002c0,.552.449.998,1,.998h.002c.552,0,.999-.45.998-1.002l-.009-4.998h5.681c.801,0,1.555-.312,2.122-.879l1.914-1.914c.391-.391.391-1.023,0-1.414ZM4.621,6.707l-1.207-1.207,1.207-1.207c.189-.189.44-.293.708-.293h14.171c.276,0,.5.224.5.5v2c0,.276-.224.5-.5.5H5.329c-.267,0-.519-.104-.708-.293Zm14.758,9c-.189.189-.44.293-.708.293H4.5c-.276,0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5h14.171c.267,0,.519.104.708.293l1.207,1.207-1.207,1.207Z" />
    </svg>
  );
});

DirectionSignal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DirectionSignal.displayName = 'DirectionSignal';

export default DirectionSignal;
