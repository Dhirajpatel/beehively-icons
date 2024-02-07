import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bullhorn = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m24,9.5c0-1.209-.859-2.218-2-2.45V1c0-.521-.399-.954-.917-.997-.514-.048-.983.319-1.069.832-.389,2.333-3.62,3.165-6.514,3.165H5.5C2.467,4,0,6.467,0,9.5c0,1.651.732,3.135,1.888,4.144l3.142,8.383c.274.752.826,1.354,1.552,1.692.403.188.833.282,1.264.282.347,0,.694-.061,1.03-.183.752-.274,1.354-.826,1.692-1.552.338-.727.373-1.541.099-2.292l-1.803-4.974h4.636c2.894,0,6.125.831,6.514,3.165.081.485.501.835.985.835.028,0,.056,0,.083-.003.519-.043.917-.476.917-.997v-6.05c1.141-.232,2-1.24,2-2.45ZM5.5,6h1.496l-.03,7h-1.465c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5Zm3.288,14.657c.091.25.08.522-.033.764s-.313.426-.564.518c-.25.092-.522.08-.764-.033s-.426-.313-.521-.572l-2.408-6.425c.325.06.66.092,1.002.092h1.237l2.051,5.657Zm11.212-5.958c-1.487-1.095-3.72-1.699-6.5-1.699h-4.535l.03-7h4.504c2.78,0,5.013-.604,6.5-1.699v10.397Z" />
    </svg>
  );
});

Bullhorn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bullhorn.displayName = 'Bullhorn';

export default Bullhorn;