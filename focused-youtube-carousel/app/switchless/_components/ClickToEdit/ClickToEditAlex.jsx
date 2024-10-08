'use client';
import {Link,Input} from '@mui/joy'
import {useState,useRef,useCallback} from 'react'

import _ from 'lodash';
import EditIcon from '@mui/icons-material/Edit';


export default function ClickToEdit({ onSave, children }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(children);
  const inputRef = useRef(null);

  const handleClick = useCallback(() => {
    setIsEditing(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
    }, 0);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSave(inputValue);
      setIsEditing(false);
    } else if (e.key === 'Escape' || e.key === 'Tab') {
      setInputValue(children);
      setIsEditing(false);
    }else{
      // alert('hello')
    }
  };
  const onBlur = function(){
    onSave(inputValue);
    setIsEditing(false);
  }

  return (
    <>
      {!isEditing ? (
        <Link
          onClick={handleClick}
          // disabled
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'inherit',
            '&:hover': {
              color: 'inherit',
            },
            '&:hover .edit-icon': {
              display: 'inline-block',
            },
            textDecorationColor: 'inherit',
          }}
        >
          {children}
          <EditIcon
            sx={{
              fontSize: 'md',
              display: 'none',
              marginLeft: '4px',
            }}
            className="edit-icon"
          />
        </Link>
      ) : (
        <Input
          slotProps={{
            input: {
              ref: inputRef,
            },
          }}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={onBlur}
          sx={{ width: '100%' }}
        />
      )}
    </>
  );
}
