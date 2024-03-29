import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SiteBrowserLock = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m23.411,15.866c-.369-.427-.867-.707-1.411-.814v-.552c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v.552c-.544.107-1.042.387-1.411.814-.475.55-.687,1.278-.582,1.997l.524,3.573c.215,1.462,1.491,2.564,2.968,2.564h6c1.477,0,2.753-1.102,2.968-2.564l.524-3.573c.105-.719-.106-1.447-.582-1.997Zm-5.911-3.866c1.378,0,2.5,1.122,2.5,2.5v.5h-5v-.5c0-1.378,1.122-2.5,2.5-2.5Zm3.99,9.145c-.072.487-.497.855-.99.855h-6c-.493,0-.918-.368-.99-.854l-.524-3.573c-.029-.197.061-.335.117-.4.056-.064.179-.173.378-.173h8.039c.199,0,.322.108.378.173.056.065.146.203.117.4l-.524,3.572ZM4,4.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm4,0c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm0,15.5h-3c-1.654,0-3-1.346-3-3v-8h20v1c0,.552.448,1,1,1s1-.448,1-1v-5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v12c0,2.757,2.243,5,5,5h3c.552,0,1-.448,1-1s-.448-1-1-1ZM5,2h14c1.654,0,3,1.346,3,3v2H2v-2c0-1.654,1.346-3,3-3Z" />
    </svg>
  );
});

SiteBrowserLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SiteBrowserLock.displayName = 'SiteBrowserLock';

export default SiteBrowserLock;
