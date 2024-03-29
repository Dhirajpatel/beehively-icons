import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HouseUser = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m21.797,5.539L14.797.815c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.539c-1.38.932-2.203,2.481-2.203,4.146v9.315c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-9.315c0-1.664-.823-3.214-2.203-4.146Zm-13.797,16.461c0-2.206,1.794-4,4-4s4,1.794,4,4h-8Zm14-3c0,1.654-1.346,3-3,3h-1c0-3.309-2.691-6-6-6s-6,2.691-6,6h-1c-1.654,0-3-1.346-3-3v-9.315c0-.999.494-1.929,1.322-2.487l7-4.724c.51-.344,1.094-.516,1.678-.516s1.168.172,1.678.516l7,4.724c.828.559,1.322,1.488,1.322,2.487v9.315ZM12,7c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" />
    </svg>
  );
});

HouseUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HouseUser.displayName = 'HouseUser';

export default HouseUser;
