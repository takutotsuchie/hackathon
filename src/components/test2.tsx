
import Header from './Header';
import React, { useRef, useState,useCallback, FC, MouseEventHandler } from 'react'
import TextArea from '../textForm/textArea'
import { isGeneratorFunction } from 'util/types';

const test2 = () => {
  let point=20
  return (
    <h1>
    {/* {(() => {
      if(point<50){
        return(<h1>point is 50未満</h1>)
      }else{
        return(<h1>point is 50以上</h1>)
      })}     */}

      {(point<10)? "point is 50未満" : "point is 50以上"}
    </h1>
  )
}
export default test2