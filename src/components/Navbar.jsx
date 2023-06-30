import {Link, NavLink} from 'react-router-dom'


const activeLinkClass = ({isActive}) => {
  return isActive ? 'rounded-md bg-sky-300 p-1 text-gray-700' : 'p-1 text-slate-50'
} 


const Navbar = () => {
  return (
    <nav className="w-full flex justify-center align-center h-16 col-span-4 bg-sky-800">
      <ul className="flex items-center gap-6 list-none">
        <li>
          <NavLink to="/" className={activeLinkClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/counter" className={activeLinkClass}>Counter</NavLink>
        </li>
        <li>
          <NavLink to="/todos" className={activeLinkClass}>Todo List</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
