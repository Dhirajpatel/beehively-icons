import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Webcam = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m22,10C22,4.486,17.514,0,12,0S2,4.486,2,10c0,3.665,1.982,6.875,4.93,8.616-.654.544-1.211,1.205-1.631,1.949-.407.72-.401,1.578.017,2.293.417.715,1.159,1.142,1.986,1.142h9.394c.826,0,1.569-.427,1.988-1.142.416-.711.424-1.563.021-2.278-.425-.757-.978-1.42-1.634-1.964,2.947-1.741,4.929-4.951,4.929-8.615Zm-5.038,11.56c.066.118.034.222-.005.289-.033.057-.111.152-.261.152H7.302c-.149,0-.226-.094-.258-.149-.033-.057-.077-.17-.003-.301.475-.841,1.195-1.535,2.048-1.982.922.281,1.899.433,2.912.433s1.989-.152,2.911-.432c.854.448,1.578,1.15,2.051,1.992Zm-4.962-3.56c-4.411,0-8-3.589-8-8S7.589,2,12,2s8,3.589,8,8-3.589,8-8,8Zm0-13c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,8c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z" />
    </svg>
  );
});

Webcam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Webcam.displayName = 'Webcam';

export default Webcam;
