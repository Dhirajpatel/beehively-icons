import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Government = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m22,22h-1v-8.001c1.104-.004,2-.902,2-2.007,0-.736-.402-1.412-1.047-1.762l-8.604-4.693c-.112-.061-.233-.093-.35-.137v-1.02l2.635-1.635c.495-.33.484-1.06-.02-1.375L13.152.215c-.225-.141-.485-.215-.751-.215-.782,0-1.417.634-1.417,1.417v3.583h.015v.4c-.117.045-.238.076-.35.137L2.047,10.23c-.646.351-1.047,1.025-1.047,1.762,0,1.105.897,2.003,2,2.007v8.001h-1c-.552,0-1,.447-1,1s.448,1,1,1h20c.553,0,1-.447,1-1s-.447-1-1-1Zm-11-8v8h-2v-8h2Zm2,0h2v8h-2v-8Zm4,0h2v8h-2v-8Zm-13.996-2.014l8.604-4.693c.245-.135.538-.135.783,0l8.601,4.707-17.99-.013h.002Zm1.996,2.013h2v8h-2v-8Z" />
    </svg>
  );
});

Government.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Government.displayName = 'Government';

export default Government;
