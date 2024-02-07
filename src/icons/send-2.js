import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Send2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m22.858,1.142c-1.089-1.09-2.663-1.429-4.136-.874L2.328,7.062C.392,7.791-.206,9.598.061,11.064c.268,1.468,1.464,2.948,3.534,2.948h6.379v6.394c0,2.069,1.48,3.266,2.947,3.532.219.04.445.061.674.061,1.309,0,2.708-.674,3.319-2.295l6.83-16.457c.544-1.442.205-3.016-.886-4.105Zm-.974,3.369l-6.83,16.457c-.346.915-1.145,1.118-1.774,1.004-.632-.115-1.307-.587-1.307-1.565v-7.394c0-.553-.447-1-1-1H3.595c-.979,0-1.451-.675-1.566-1.307-.114-.631.089-1.429,1.035-1.785L19.458,2.127c.226-.085.455-.127.68-.127.481,0,.942.191,1.307.556.535.535.695,1.278.44,1.955Z" />
    </svg>
  );
});

Send2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Send2.displayName = 'Send2';

export default Send2;
