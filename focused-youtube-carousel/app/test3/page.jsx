
'use client'
import React from 'react'

import { PageHeaderV2 } from 'switchless'
import {Pagination} from 'switchless'
function page() {
  return (
    <div>

       <Pagination count={10} disabled/>
   
    </div>
  )
}

export default page