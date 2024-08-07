import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Strikethrough = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m24,12c0,.553-.448,1-1,1H1c-.552,0-1-.447-1-1s.448-1,1-1h4.081c-1.863-1.003-3.081-2.97-3.081-5.151C2,2.624,4.624,0,7.848,0h8.235c3.262,0,5.917,2.654,5.917,5.917v1.083c0,.553-.448,1-1,1s-1-.447-1-1v-1.083c0-2.16-1.757-3.917-3.917-3.917H7.848c-2.122,0-3.848,1.727-3.848,3.849,0,1.732,1.167,3.26,2.84,3.714l5.293,1.438h10.867c.552,0,1,.447,1,1Zm-3.943,3.11c-.495.244-.698.844-.454,1.34.259.524.396,1.113.396,1.701,0,2.122-1.726,3.849-3.848,3.849H7.917c-2.16,0-3.917-1.757-3.917-3.917v-1.083c0-.553-.448-1-1-1s-1,.447-1,1v1.083c0,3.263,2.654,5.917,5.917,5.917h8.235c3.225,0,5.848-2.624,5.848-5.849,0-.894-.208-1.788-.604-2.588-.245-.494-.844-.699-1.339-.453Z" />
    </svg>
  );
});

Strikethrough.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Strikethrough.displayName = 'Strikethrough';

export default Strikethrough;
