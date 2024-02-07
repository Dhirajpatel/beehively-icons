import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const License = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19.95,5.54l-3.48-3.49c-1.32-1.32-3.08-2.05-4.95-2.05H7C4.24,0,2,2.24,2,5v14c0,2.76,2.24,5,5,5h2c.55,0,1-.45,1-1s-.45-1-1-1h-2c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h4.51c.16,0,.33,0,.49,.02V7c0,1.65,1.35,3,3,3h4.98c.02,.16,.02,.32,.02,.49v8.51c0,1.07-.58,2.06-1.5,2.6-.48,.28-.64,.89-.36,1.37,.27,.48,.88,.64,1.37,.37,1.54-.89,2.5-2.55,2.5-4.33V10.49c0-1.87-.73-3.63-2.05-4.95Zm-4.95,2.46c-.55,0-1-.45-1-1V2.66c.38,.22,.73,.49,1.05,.81l3.48,3.49c.32,.32,.59,.67,.81,1.05h-4.34Zm-1,4c-2.21,0-4,1.79-4,4,0,1.48,.81,2.77,2,3.46v3.81c0,.64,.78,.96,1.23,.51l.77-.77,.77,.77c.45,.45,1.23,.13,1.23-.51v-3.81c1.19-.69,2-1.99,2-3.46,0-2.21-1.79-4-4-4Zm0,6c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z" />
    </svg>
  );
});

License.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

License.displayName = 'License';

export default License;
