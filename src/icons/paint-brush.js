import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PaintBrush = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m23.1.9a3.139 3.139 0 0 0 -4.33 0l-11.207 11.2a5.548 5.548 0 0 0 -1.058-.1 5.457 5.457 0 0 0 -3.885 1.609c-1.352 1.353-2.306 4.983-2.589 6.954a3 3 0 0 0 2.969 3.437 3.1 3.1 0 0 0 .439-.031c1.971-.283 5.6-1.237 6.954-2.589a5.494 5.494 0 0 0 1.5-4.941l11.207-11.209a3.068 3.068 0 0 0 0-4.33zm-14.123 19.066c-.725.725-3.5 1.689-5.824 2.023a1.015 1.015 0 0 1 -.859-.283 1 1 0 0 1 -.282-.859c.333-2.323 1.3-5.1 2.022-5.824a3.5 3.5 0 0 1 4.943 4.943zm12.711-16.15-10.621 10.622a5.378 5.378 0 0 0 -1.5-1.508l10.617-10.618a1.086 1.086 0 0 1 1.5 0 1.062 1.062 0 0 1 .004 1.504z" />
    </svg>
  );
});

PaintBrush.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PaintBrush.displayName = 'PaintBrush';

export default PaintBrush;
