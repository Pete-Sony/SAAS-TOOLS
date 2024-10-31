import ConfirmationModal from "./ConfirmationModal";
import React from 'react'

function TestConfirmationModal() {
const member ={
  user:{
    name: "Joel"
  }
}

  return (
    <ConfirmationModal member={member}/>
  )
}

export default TestConfirmationModal