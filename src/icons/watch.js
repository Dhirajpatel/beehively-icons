import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Watch = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m22,12c0-3.265-1.573-6.169-4-7.995V1c0-.552-.448-1-1-1s-1,.448-1,1v1.836c-1.226-.537-2.578-.836-4-.836s-2.774.299-4,.836v-1.836c0-.552-.448-1-1-1s-1,.448-1,1v3.005c-2.427,1.826-4,4.73-4,7.995s1.573,6.169,4,7.995v3.005c0,.553.448,1,1,1s1-.447,1-1v-1.836c1.226.537,2.578.836,4,.836s2.774-.299,4-.836v1.836c0,.553.448,1,1,1s1-.447,1-1v-3.005c2.427-1.826,4-4.73,4-7.995Zm-18,0c0-4.411,3.589-8,8-8s8,3.589,8,8-3.589,8-8,8-8-3.589-8-8Zm10.707,1.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2-2c-.188-.188-.293-.442-.293-.707v-4c0-.552.448-1,1-1s1,.448,1,1v3.586l1.707,1.707Z" />
    </svg>
  );
});

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Watch.displayName = 'Watch';

export default Watch;
