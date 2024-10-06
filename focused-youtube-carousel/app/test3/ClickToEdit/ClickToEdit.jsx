'use client'

import { useState } from 'react';
import {Link} from "@mui/joy";

 export default function ClickToEdit({children}) {
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = ()=>{ 
    setIsEditing(!isEditing);
  }
  return (<>
  {isEditing ?
   <input onClick={handleClick} type="text" value={children} />
    :
   <Link onClick={handleClick}>{children}</Link> }
 
  </>

 
  )
}

