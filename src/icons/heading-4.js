import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Heading4 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m12,5v14c0,.553-.447,1-1,1s-1-.447-1-1v-6H2v6c0,.553-.447,1-1,1s-1-.447-1-1V5c0-.553.447-1,1-1s1,.447,1,1v6h8v-6c0-.553.447-1,1-1s1,.447,1,1Zm11-1c-.553,0-1,.447-1,1v7h-4.333c-.919,0-1.667-.748-1.667-1.667v-5.333c0-.553-.447-1-1-1s-1,.447-1,1v5.333c0,2.022,1.645,3.667,3.667,3.667h4.333v5c0,.553.447,1,1,1s1-.447,1-1V5c0-.553-.447-1-1-1Z" />
    </svg>
  );
});

Heading4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heading4.displayName = 'Heading4';

export default Heading4;
