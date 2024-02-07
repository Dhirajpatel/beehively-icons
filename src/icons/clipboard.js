import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Clipboard = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m16,2h-.171c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2h-.171c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-5,0h2c.552,0,1,.449,1,1s-.448,1-1,1h-2c-.552,0-1-.449-1-1s.448-1,1-1Zm8,17c0,1.654-1.346,3-3,3h-8c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h.172c.413,1.164,1.524,2,2.828,2h2c1.304,0,2.415-.836,2.828-2h.172c1.654,0,3,1.346,3,3v12Z" />
    </svg>
  );
});

Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Clipboard.displayName = 'Clipboard';

export default Clipboard;
