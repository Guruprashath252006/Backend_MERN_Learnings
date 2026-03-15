import { Link } from "react-router-dom"


const NavBar = () => {
  return (
   <div className='bg-black text-white flex p-4 justify-between'>
    <div>
        Welcome!
    </div>

    <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={'/primitive'}>Primitive</Link>
        <Link to={'/nonprimitive'}>Non-Primitive</Link>
        <Link to={'/pros'}>Promise</Link>

    </div>

   </div>
  )
}

export default NavBar