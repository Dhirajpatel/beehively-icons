import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Loading = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m13 1v2a1 1 0 0 1 -2 0v-2a1 1 0 0 1 2 0zm-1 19a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1-1zm-8-8a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm19-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-4.982-9.382a1 1 0 0 0 -1.367.364l-1 1.731a1 1 0 0 0 .365 1.366.987.987 0 0 0 .5.135 1 1 0 0 0 .866-.5l1-1.731a1 1 0 0 0 -.364-1.365zm-10.031 17.303a1 1 0 0 0 -1.366.364l-1 1.731a1 1 0 0 0 .364 1.366.989.989 0 0 0 .5.135 1 1 0 0 0 .867-.5l1-1.731a1 1 0 0 0 -.365-1.365zm-3.272-12.3-1.731-1a1 1 0 0 0 -1 1.731l1.731 1a1 1 0 0 0 1-1.731zm17.3 10.03-1.731-1a1 1 0 0 0 -1 1.731l1.731 1a.987.987 0 0 0 .5.135 1 1 0 0 0 .5-1.866zm-14.666-14.669a1 1 0 0 0 -1.731 1l1 1.731a1 1 0 0 0 .866.5.987.987 0 0 0 .5-.135 1 1 0 0 0 .365-1.366zm10.03 17.3a1 1 0 0 0 -1.731 1l1 1.731a1 1 0 0 0 1.731-1zm2.408-10.8a1 1 0 0 0 .5-.134l1.731-1a1 1 0 0 0 -1-1.731l-1.731 1a1 1 0 0 0 .5 1.865zm-16.074 7.166-1.731 1a1 1 0 0 0 .5 1.866.987.987 0 0 0 .5-.135l1.731-1a1 1 0 0 0 -1-1.731z" />
    </svg>
  );
});

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Loading.displayName = 'Loading';

export default Loading;
