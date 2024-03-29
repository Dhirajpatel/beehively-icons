import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ExpandArrows = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M22.978,9.022a1,1,0,0,0,1-1V3.978a4,4,0,0,0-4-4h-4a1,1,0,0,0,0,2h4a1.965,1.965,0,0,1,.545.085L12,10.586,3.478,2.064A1.981,1.981,0,0,1,3.955,2H8A1,1,0,0,0,8,0H3.955a4,4,0,0,0-4,4V8a1,1,0,0,0,2,0V4a1.978,1.978,0,0,1,.085-.546L10.586,12,2.035,20.551a1.962,1.962,0,0,1-.08-.529V15.978a1,1,0,0,0-2,0v4.044a4,4,0,0,0,4,4h4a1,1,0,0,0,0-2h-4a1.97,1.97,0,0,1-.494-.069L12,13.414l8.506,8.506a1.96,1.96,0,0,1-.528.08H15.933a1,1,0,0,0,0,2h4.045a4,4,0,0,0,4-4V16a1,1,0,0,0-2,0v4a1.964,1.964,0,0,1-.07.494L13.414,12l8.5-8.5a1.982,1.982,0,0,1,.064.478V8.022A1,1,0,0,0,22.978,9.022Z" />
      <path d="M23,9a1,1,0,0,0,1-1V3a3,3,0,0,0-3-3H16a1,1,0,0,0,0,2h4.586L12,10.586,3.414,2H8A1,1,0,0,0,8,0H3A3,3,0,0,0,0,3V8A1,1,0,0,0,2,8V3.414L10.586,12,2,20.586V16a1,1,0,0,0-2,0v5a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2H3.414L12,13.414,20.586,22H16a1,1,0,0,0,0,2h5a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v4.586L13.414,12,22,3.414V8A1,1,0,0,0,23,9Z" />
    </svg>
  );
});

ExpandArrows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ExpandArrows.displayName = 'ExpandArrows';

export default ExpandArrows;
