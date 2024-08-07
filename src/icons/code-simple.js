import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CodeSimple = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M9,22c-.249,0-.498-.093-.692-.278L1.187,14.894c-1.575-1.574-1.575-4.112-.015-5.672L8.303,2.283c.396-.385,1.029-.377,1.414,.02,.385,.396,.376,1.029-.02,1.414L2.576,10.646c-.77,.77-.77,2.04,.01,2.819l7.106,6.813c.399,.382,.412,1.016,.03,1.414-.196,.204-.459,.308-.722,.308Zm6.698-.284l7.112-6.94c1.559-1.56,1.559-4.098-.014-5.671L15.693,2.279c-.398-.382-1.031-.369-1.414,.028-.382,.398-.37,1.031,.028,1.414l7.089,6.811c.779,.78,.779,2.049,.009,2.82l-7.104,6.932c-.396,.386-.403,1.019-.018,1.414,.196,.201,.456,.302,.716,.302,.252,0,.504-.095,.698-.284Z" />
    </svg>
  );
});

CodeSimple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeSimple.displayName = 'CodeSimple';

export default CodeSimple;
