import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Subscript = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m24,14v9c0,.553-.448,1-1,1s-1-.447-1-1v-6.614l-.78.809c-.383.398-1.017.409-1.414.025s-.409-1.017-.025-1.414l2.413-2.5c.188-.195.448-.306.72-.306.552,0,1.087.447,1.087,1ZM14.63.224c-.428-.348-1.058-.283-1.406.146l-5.724,7.045L1.776.369C1.428-.061.797-.124.37.224-.059.572-.125,1.202.224,1.631l5.987,7.369L.224,16.369c-.349.429-.283,1.059.146,1.407.185.15.408.224.63.224.291,0,.579-.126.776-.369l5.724-7.045,5.724,7.045c.197.243.486.369.776.369.222,0,.445-.073.63-.224.429-.349.494-.979.146-1.407l-5.987-7.369L14.776,1.631c.349-.429.283-1.059-.146-1.407Z" />
    </svg>
  );
});

Subscript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Subscript.displayName = 'Subscript';

export default Subscript;
