import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Fax = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M11,13.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Zm1.5,3.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm5-2c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm0,5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm6.5-13.76v12.76c0,2.76-2.24,5-5,5H4c-2.21,0-4-1.79-4-4V8c0-2.21,1.79-4,4-4s4,1.79,4,4h2V4c0-2.21,1.79-4,4-4h3.76c1.07,0,2.07,.42,2.83,1.17l2.24,2.24c.74,.74,1.17,1.77,1.17,2.83Zm-18,1.76c0-1.1-.9-2-2-2s-2,.9-2,2v12c0,1.1,.9,2,2,2s2-.9,2-2V8Zm6,0h10v-1.76c0-.08,0-.16-.02-.24h-1.98c-1.1,0-2-.9-2-2v-1.98c-.08,0-.16-.02-.24-.02h-3.76c-1.1,0-2,.9-2,2v4Zm10,2H8v10c0,.73-.2,1.41-.54,2h11.54c1.65,0,3-1.35,3-3V10Z" />
    </svg>
  );
});

Fax.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fax.displayName = 'Fax';

export default Fax;
