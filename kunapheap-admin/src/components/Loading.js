import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color,h,w }) => (
    <ReactLoading type={type} color={color ? color : "#FFFFFF"} height={ h ? h :  '1.5rem'} width={w ? w : '1.5rem'} />
);
 
export default Loading;