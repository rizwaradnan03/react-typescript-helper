import React from 'react'

const Menu: React.FC<{path: string, title: string}> = ({path,title}) => {
  return (
    <>
        <a href={path} className='btn btn-success'>{title}</a>
    </>
  )
}

export default Menu