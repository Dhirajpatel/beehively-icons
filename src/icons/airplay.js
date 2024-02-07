import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Airplay = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m14.497,13.169c-.62-.742-1.53-1.169-2.497-1.169s-1.877.427-2.502,1.176l-5.55,6.775c-.461.563-.555,1.323-.243,1.981s.958,1.067,1.687,1.067h13.215c.729,0,1.375-.409,1.687-1.066.312-.658.22-1.418-.242-1.983l-5.555-6.781Zm-8.823,7.831l5.366-6.55c.477-.572,1.45-.565,1.916-.007l5.371,6.557H5.674ZM24,6v8c0,1.434-.617,2.801-1.692,3.75-.19.168-.427.25-.662.25-.276,0-.552-.114-.75-.339-.365-.414-.326-1.046.089-1.411.646-.569,1.016-1.39,1.016-2.25V6c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v8c0,.86.37,1.681,1.016,2.25.414.365.454.997.088,1.411-.366.414-.996.455-1.412.089-1.076-.949-1.693-2.315-1.693-3.75V6C0,3.243,2.243,1,5,1h14c2.757,0,5,2.243,5,5Z" />
    </svg>
  );
});

Airplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Airplay.displayName = 'Airplay';

export default Airplay;
