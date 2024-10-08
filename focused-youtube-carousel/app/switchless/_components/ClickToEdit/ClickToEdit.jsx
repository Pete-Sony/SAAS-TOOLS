'use client'

import { useState, useRef, useEffect } from 'react';
import { Link, Input } from "@mui/joy";
import EditIcon from '@mui/icons-material/Edit';

export default function ClickToEdit({ children, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(children );

  const inputRef = useRef(null);
  useEffect(() => {
    setInputValue(children);
    // console.log('children changed : ',children)
    // alert('children changed : ',children)
  }, [children]);

  const StyledEditIcon = () => (
    <EditIcon className='edit-icon' fontSize='inherit' sx={{ ml: '4px', display: isEditing ? 'inline-flex' : 'none' }} />
  );

  const handleClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
    }, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      finishEditing();
    }
    // if (e.key === 'Escape' || e.key === 'Tab') {
    //   setIsEditing(false);
    //   // alert(children)
    //   onSave(inputValue);
    // }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const finishEditing = () => {
    setIsEditing(false);
    // const newValue = inputValue.trim() || "Enter Text";
    setInputValue(inputValue);
    // console.log("Calling onSave")
    onSave(inputValue);
  };

  const onBlur = () => {
    finishEditing();
  };

  return (
    <>
      {isEditing ? (
        <Input
          onBlur={onBlur}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          slotProps={{ input: { ref: inputRef } }}
          sx={{ width: '100%' }}
        />
      ) : (
        <Link
          onClick={handleClick}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'inherit',
            textDecoration: 'inherit',
            '&:hover .edit-icon': {
              display: 'inline-flex',
            },
            '&:hover': { color: 'inherit' }
          }}
        >
          {inputValue}
          <StyledEditIcon />
        </Link>
      )}
    </>
  );
}



/* -------------------------------------------------------------------------- */
/*                                  Scenarios                                */
/* -------------------------------------------------------------------------- */

// 1. On pressing enter, the text is saved and the input field is hidden
// 2. On pressing escape, the text is not saved and the input field is hidden
// 3. On pressing tab, the text is not  saved and the input field is hidden ??
// 4. On clicking outside the input field, the text is saved and the input field is hidden
// 5. On saving the same text the component should be memoised
// 6. On saving an empty text, the component should display the placeholder text. The database should be updated with empty string.
// 7. The updated data should be fetched and displayed in the component


/* -------------------------------------------------------------------------- */
/*                                    Check                                   */
/* -------------------------------------------------------------------------- */
// 1. Some functionalities are reverted such as pressing escape and tab. There might be redundant code of that funcitonality.
// 2. The component is not memoised




