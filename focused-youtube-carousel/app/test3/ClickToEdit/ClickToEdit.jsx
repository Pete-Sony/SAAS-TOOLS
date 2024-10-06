'use client'

import { useState, useRef, useEffect } from 'react';
import {Link,Input,styled} from "@mui/joy";
import EditIcon from '@mui/icons-material/Edit';

export default function ClickToEdit({children, onUpdate}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(children);
  const inputRef = useRef(null);

  const StyledEditIcon = styled(EditIcon)`
    cursor: pointer;
  `;
  
  const handleClick = ()=>{ 
    setIsEditing(!isEditing);
    setTimeout(() => {
      if(inputRef.current){

        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
      
    }, 0);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
 
      setIsEditing(false);
  
    }
    if(e.key === 'Escape'){
      setIsEditing(false);
      setInputValue(children);
    }
  }

  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }
  
  const onBlur = async ()=>{
    setIsEditing(false);
   
  }
  
      return (
  <>
  {isEditing ?
   <Input slotProps={{input:{ref:inputRef}}}  onBlur={onBlur} type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
    :
   <Link sx={{cursor:'pointer'}} onClick={handleClick} endDecorator={<StyledEditIcon/>} >{inputValue}</Link> }

  </>

    
  )
}

