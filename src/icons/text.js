import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Text = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M23.931,22.634L16.144,2.814c-1.288-3.718-7-3.717-8.288,0L.069,22.634c-.202,.514,.051,1.095,.565,1.296,.515,.203,1.095-.051,1.296-.565l2.501-6.366h15.137l2.501,6.366c.202,.519,.795,.766,1.296,.565,.514-.202,.767-.782,.565-1.296ZM5.217,15L9.717,3.545c.924-2.104,3.641-2.104,4.565,0l4.5,11.455H5.217Z" />
    </svg>
  );
});

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Text.displayName = 'Text';

export default Text;
