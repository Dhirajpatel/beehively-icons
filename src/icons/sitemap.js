import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sitemap = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M22,17v-1c0-2.76-2.24-5-5-5h-4V7c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2v4H7c-2.76,0-5,2.24-5,5v1c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2v-1c0-1.65,1.35-3,3-3h4v4c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2v-4h4c1.65,0,3,1.35,3,3v1c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2ZM11,3h2v2h-2V3ZM4,21H2v-2s2,0,2,0v2Zm9,0h-2v-2s2,0,2,0v2Zm9,0h-2v-2s2,0,2,0v2Z" />
    </svg>
  );
});

Sitemap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sitemap.displayName = 'Sitemap';

export default Sitemap;
