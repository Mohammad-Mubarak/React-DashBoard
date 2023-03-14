import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  let userdata = localStorage.getItem("user")
  let navigate =useNavigate()


  // logout feature
  const logoutuser = ()=>{
    localStorage.clear()
    navigate("/signup")
  }


  return (
    <div className='nav-clr'>
    <img src='https://cdn-icons-png.flaticon.com/512/4333/4333609.png' alt='logo' className='logo'/>
    {
      userdata ?
      
      <ul className="nav-ul">
        <li>
            <Link className='anc' to="/">Products</Link>
        </li>
        <li>
            <Link className='anc' to="/add">add</Link>
        </li>
        <li>
            <Link className='anc' to="/update/:id">update</Link>
        </li>
      
        <li>
            <Link className='anc' to="/profile">profile</Link>
        </li>
        <li><Link className='anc'  onClick={logoutuser}   to="/logout">logout ({JSON.parse(userdata).name})</Link></li> 
     </ul>
     :   <ul className="nav-ul right">
            <li> <Link className='anc' to="/signup">Signup</Link></li> 
            <li><Link className='anc' to="/login">login</Link></li>
     </ul>


    }
    
    </div>
  )
}

export default Navbar
