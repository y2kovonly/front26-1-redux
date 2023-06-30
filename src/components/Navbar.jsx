import {Link, NavLink} from 'react-router-dom'


const activeLinkClass = ({isActive}) => {
  return isActive ? 'rounded-sm bg-slate-300 py-1 px-2 text-gray-700' : 'py-1 px-2 text-slate-700'
} 


const Navbar = () => {
  return (
    <nav className="flex justify-center align-center h-16 col-span-4 bg-neutral-50 border-b border-b-slate-300">
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
