import React from 'react';
import ReactLoading from 'react-loading';
 
const loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'5%'} width={'5%'} />
);
 
export default loading;