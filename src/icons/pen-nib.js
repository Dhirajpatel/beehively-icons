import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PenNib = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m23.707,7.293c-.391-.391-1.023-.391-1.414,0l-2.293,2.293-5.586-5.586,2.293-2.293c.391-.391.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.845,2.845-5.863,2.169c-1.488.551-2.637,1.791-3.073,3.317L.111,20.545c-.278.946-.018,1.967.68,2.664.513.514,1.202.79,1.904.79.251,0,.504-.035.751-.108l11.884-3.377c1.521-.432,2.76-1.574,3.315-3.054l2.215-5.907,2.846-2.846c.391-.391.391-1.023,0-1.414Zm-6.935,9.465c-.333.888-1.076,1.573-1.989,1.833l-11.12,3.16,5.818-5.818c.165.044.339.068.518.068,1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2c0,.179.024.353.068.518l-5.817,5.817,3.184-11.161c.262-.916.951-1.66,1.844-1.991l5.467-2.023,6.091,6.091-2.065,5.506Z" />
    </svg>
  );
});

PenNib.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PenNib.displayName = 'PenNib';

export default PenNib;
