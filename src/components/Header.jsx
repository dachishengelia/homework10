// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Header() {
//   return (
//     <div className='header'>
//        <Link to={'/'}>Home</Link>
//        <Link to={'/About'}>About</Link>
//     </div>
//   )
// }

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();

  return (
    <div className='header'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {location.pathname === '/about' && <Link to="/hobbies">Hobbies</Link>}
    </div>
  )
}

