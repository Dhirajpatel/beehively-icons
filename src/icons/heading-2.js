import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Heading2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m12,5v14c0,.553-.448,1-1,1s-1-.447-1-1v-6H2v6c0,.553-.448,1-1,1s-1-.447-1-1V5c0-.553.448-1,1-1s1,.447,1,1v6h8v-6c0-.553.448-1,1-1s1,.447,1,1Zm11,13h-6.882c-.03,0-.074,0-.104-.063-.038-.081.01-.138.025-.155.553-.652,1.562-1.288,2.631-1.961,2.441-1.536,5.479-3.449,5.324-7.095-.112-2.65-2.306-4.726-4.994-4.726-2.757,0-5,2.243-5,5,0,.553.448,1,1,1s1-.447,1-1c0-1.654,1.346-3,3-3,1.586,0,2.93,1.261,2.996,2.81.105,2.487-2.181,3.927-4.392,5.318-1.203.758-2.339,1.473-3.092,2.36-.548.647-.668,1.524-.313,2.29.349.754,1.084,1.222,1.918,1.222h6.882c.552,0,1-.447,1-1s-.448-1-1-1Z" />
    </svg>
  );
});

Heading2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heading2.displayName = 'Heading2';

export default Heading2;
