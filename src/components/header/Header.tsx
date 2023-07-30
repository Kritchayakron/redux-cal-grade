import React from 'react';
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
    tmpData,
  } from '../grade/gradeSlice';

function Header(){ 
    const tmpState = useAppSelector(tmpData);
   
    return (<h1>Your Grade : {tmpState.grade} </h1>);
}
export default Header;