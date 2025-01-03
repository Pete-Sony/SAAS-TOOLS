import React from 'react'
import Sidebar from './X/_components/Sidebar'

export default function ProductsLayoutPage({children}) {
  return (
    <html lang="en">
    <body>
        <Sidebar/>

    {/* Layout UI */}
    {/* Place children where you want to render a page or nested layout */}
    <main>{children}</main>
  </body>
</html>
  )
}
