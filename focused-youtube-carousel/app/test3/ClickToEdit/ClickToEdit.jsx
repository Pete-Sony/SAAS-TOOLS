'use client'

import { useState, useRef } from 'react';
import {Link,Input} from "@mui/joy";
import EditIcon from '@mui/icons-material/Edit';

 export default function ClickToEdit({children}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(children);
  const inputRef = useRef(null);
  const handleClick = ()=>{ 
    setIsEditing(!isEditing);
    setTimeout(() => {
      if(inputRef.current){

        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
      
    }, 0);
  
 
  }
  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }
  const renderCount = useRef(0);
  renderCount.current++;
  return (
  <>
  {isEditing ?
   <Input   type="text" value={inputValue} onChange={handleChange} />
    :
   <Link onClick={handleClick} endDecorator={<EditIcon/>} >{children}</Link> }
   {/* <div>
  { `I've rendered this component ${renderCount.current} times` }
   </div>
  */}
  </>

 
  )
}

