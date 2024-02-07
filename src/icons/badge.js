import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Badge = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m20 8a8 8 0 1 0 -14 5.274v8.226a2.5 2.5 0 0 0 4.062 1.952l1.626-1.3a.5.5 0 0 1 .624 0l1.626 1.3a2.5 2.5 0 0 0 4.062-1.952v-8.226a7.957 7.957 0 0 0 2-5.274zm-8-6a6 6 0 1 1 -6 6 6.006 6.006 0 0 1 6-6zm3.717 19.948a.491.491 0 0 1 -.529-.06l-1.626-1.3a2.49 2.49 0 0 0 -3.124 0l-1.625 1.3a.5.5 0 0 1 -.813-.388v-6.582a7.935 7.935 0 0 0 8 0v6.582a.487.487 0 0 1 -.283.448z" />
    </svg>
  );
});

Badge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Badge.displayName = 'Badge';

export default Badge;
