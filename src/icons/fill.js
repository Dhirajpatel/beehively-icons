import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Fill = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m22.327 18.422c.728 1.034 1.673 2.229 1.673 3.078a2.5 2.5 0 0 1 -5 0c0-.775.961-2.008 1.692-3.069a1 1 0 0 1 1.635-.009zm-.877-4.558-8.672 8.672a5.006 5.006 0 0 1 -7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.709-5.71-2.856-2.89a1 1 0 0 1 1.422-1.406l2.848 2.884 1.548-1.55-.843-.843a1 1 0 0 1 1.414-1.414l13 13a1 1 0 1 1 -1.414 1.414zm-1.414-1.414-8.486-8.486-1.557 1.558 4.718 4.778a1 1 0 1 1 -1.422 1.4l-4.709-4.765-5.7 5.7a3 3 0 0 0 0 4.243l4.242 4.243a3.005 3.005 0 0 0 4.243 0z" />
    </svg>
  );
});

Fill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fill.displayName = 'Fill';

export default Fill;
