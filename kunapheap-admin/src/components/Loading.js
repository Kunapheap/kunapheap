import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color,h,w }) => (
    <ReactLoading type={type} color={"#FFFFFF"} height={ '1.5rem'} width={'1.5rem'} />
);
 
export default Loading;