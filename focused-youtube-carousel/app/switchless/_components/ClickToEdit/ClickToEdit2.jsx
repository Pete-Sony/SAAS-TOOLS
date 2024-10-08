'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Link, Input } from "@mui/joy";
import EditIcon from '@mui/icons-material/Edit';

export default function ClickToEdit({ children, onSave }) {
  const [state, setState] = useState({
    isEditing: false,
    inputValue: children || "Enter Text"
  });
  const inputRef = useRef(null);

  const StyledEditIcon = useMemo(() => () => (
    <EditIcon 
      className='edit-icon' 
      fontSize='inherit' 
      sx={{ ml: '4px', display: state.isEditing ? 'inline-flex' : 'none' }} 
    />
  ), [state.isEditing]);

  const handleClick = useCallback(() => {
    setState(prev => ({ ...prev, isEditing: true }));
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
    }, 0);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      finishEditing();
    }
    if (e.key === 'Escape' || e.key === 'Tab') {
      setState(prev => ({ ...prev, isEditing: false, inputValue: children }));
      onSave(children);
    }
  }, [children, onSave]);

  const handleChange = useCallback((e) => {
    setState(prev => ({ ...prev, inputValue: e.target.value }));
  }, []);

  const finishEditing = useCallback(() => {
    const newValue = state.inputValue.trim() || "Enter Text";
    setState(prev => ({ ...prev, isEditing: false, inputValue: newValue }));
    onSave(newValue);
  }, [state.inputValue, onSave]);

  const onBlur = useCallback(() => {
    finishEditing();
  }, [finishEditing]);

  useEffect(() => {
    setState(prev => ({ ...prev, inputValue: children || "Enter Text" }));
  }, [children]);

  return (
    <>
      {state.isEditing ? (
        <Input
          onBlur={onBlur}
          value={state.inputValue}
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
          {state.inputValue}
          <StyledEditIcon />
        </Link>
      )}
    </>
  );
}