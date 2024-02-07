import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Umbrella = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m23.717 9.549a12.834 12.834 0 0 0 -10.717-7.506v-1.043a1 1 0 0 0 -2 0v1.043a12.843 12.843 0 0 0 -10.733 7.506 3.945 3.945 0 0 0 .405 3.682 4.015 4.015 0 0 0 3.328 1.769h7v6a1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 6 0v-6h6.983a4.017 4.017 0 0 0 3.329-1.769 3.948 3.948 0 0 0 .405-3.682zm-2.061 2.561a1.993 1.993 0 0 1 -1.673.89h-15.983a1.992 1.992 0 0 1 -1.673-.891 1.927 1.927 0 0 1 -.2-1.818c1.454-3.645 5.607-6.291 9.873-6.291a10.809 10.809 0 0 1 9.859 6.291 1.923 1.923 0 0 1 -.203 1.819z" />
    </svg>
  );
});

Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Umbrella.displayName = 'Umbrella';

export default Umbrella;
