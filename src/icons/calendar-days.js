import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarDays = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19,2h-1V1c0-.55-.45-1-1-1s-1,.45-1,1v1H8V1c0-.55-.45-1-1-1s-1,.45-1,1v1h-1C2.24,2,0,4.24,0,7v12c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V7c0-2.76-2.24-5-5-5Zm-8,7v3h-3v-3h3Zm5,0v3h-3v-3h3Zm6,0v3h-4v-3h4ZM6,12H2v-3H6v3Zm-4,2H6v3H2v-3Zm6,0h3v3h-3v-3Zm3,5v3h-3v-3h3Zm2,0h3v3h-3v-3Zm0-2v-3h3v3h-3Zm5-3h4v3h-4v-3ZM5,4h14c1.65,0,3,1.35,3,3H2c0-1.65,1.35-3,3-3Zm-3,15H6v3h-1c-1.65,0-3-1.35-3-3Zm17,3h-1v-3h4c0,1.65-1.35,3-3,3Z" />
    </svg>
  );
});

CalendarDays.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarDays.displayName = 'CalendarDays';

export default CalendarDays;
