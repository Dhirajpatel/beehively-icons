import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Outdent = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m0,5c0-.553.448-1,1-1h22c.552,0,1,.447,1,1s-.448,1-1,1H1c-.552,0-1-.447-1-1Zm23,14H1c-.552,0-1,.447-1,1s.448,1,1,1h22c.552,0,1-.447,1-1s-.448-1-1-1Zm0-10h-14c-.552,0-1,.447-1,1s.448,1,1,1h14c.552,0,1-.447,1-1s-.448-1-1-1Zm0,5h-14c-.552,0-1,.447-1,1s.448,1,1,1h14c.552,0,1-.447,1-1s-.448-1-1-1Zm-19.707,2.245c.63.63,1.707.184,1.707-.707v-6.075c0-.891-1.077-1.337-1.707-.707L.319,11.729c-.426.426-.426,1.116,0,1.542l2.974,2.974Z" />
    </svg>
  );
});

Outdent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Outdent.displayName = 'Outdent';

export default Outdent;
