import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileWord = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19.95,5.54l-3.48-3.49c-1.32-1.32-3.08-2.05-4.95-2.05H7C4.24,0,2,2.24,2,5v14c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5V10.49c0-1.87-.73-3.63-2.05-4.95Zm-1.41,1.41c.32,.32,.59,.67,.81,1.05h-4.34c-.55,0-1-.45-1-1V2.66c.38,.22,.73,.49,1.05,.81l3.48,3.49Zm1.46,12.05c0,1.65-1.35,3-3,3H7c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h4.51c.16,0,.33,0,.49,.02V7c0,1.65,1.35,3,3,3h4.98c.02,.16,.02,.32,.02,.49v8.51Zm-3.28-5.76l-1.42,5.66c-.15,.61-.68,1.05-1.31,1.09-.63,.04-1.21-.32-1.44-.91l-.55-1.38-.55,1.38c-.22,.56-.75,.91-1.34,.91-.03,0-.07,0-.1,0-.63-.04-1.15-.48-1.31-1.1l-1.41-5.66c-.13-.54,.19-1.08,.73-1.21,.53-.13,1.08,.19,1.21,.73l1,4,.85-2.13c.15-.38,.52-.63,.93-.63h0c.41,0,.78,.25,.93,.63l.84,2.13,1.01-4c.13-.54,.68-.86,1.21-.73,.54,.13,.86,.68,.73,1.21Z" />
    </svg>
  );
});

FileWord.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileWord.displayName = 'FileWord';

export default FileWord;
