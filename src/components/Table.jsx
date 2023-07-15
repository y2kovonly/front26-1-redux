import { useState } from 'react'
import dots from '../assets/dots.svg' 


const items = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
]

const Table = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(-1)

  const handleDeleteClick = (id) => {
    console.log(id)
  }

  const handleCheckClick = (id) => {
    console.log(id)
  }

  const toggleMobileMenu = (index) => {
    if (index === showMobileMenu) {
      setShowMobileMenu(-1)
    } else {
      setShowMobileMenu(index)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-min gap-2 w-full text-sm text-left text-gray-table-auto border-collapse border-spacing-2 @container">
        { items.map((item, index) => (
          <div key={item.id} className="hover:bg-slate-200 bg-white rounded-md flex gap-1 px-2">
            <div className="py-1">
              <input 
                type="checkbox" 
                className="default:ring-2 checked:bg-green invisible @sm:visible" 
                onClick={() => handleCheckClick(item.id)}
              />
            </div>
            <div className="py-1">{item.id}</div>
            <div className="py-1 flex-grow flex-shrink-0">{item.name}</div>
            <div className="py-1 hidden @sm:block">
              <button
                className='border border-red-300 text-red-500 px-2 rounded-sm'
                onClick={() => handleDeleteClick(item.id)}
              >&#128465;</button>
            </div>
            <div className="py-1 @sm:hidden flex flex-col justify-center relative">
              <img src={dots} className="w-4 h-4 cursor-pointer" onClick={() => toggleMobileMenu(index)} />
              <ul className={`absolute z-10 bg-white border border-slate-300 flex-col gap-2 top-2 right-7 ${showMobileMenu !== index ? 'hidden' : 'flex'}`}>
                <li className="px-3 py-2 cursor-pointer hover:bg-slate-200" onClick={() => handleCheckClick(item.id)}>toggle</li>
                <li className="px-3 py-2 cursor-pointer hover:bg-slate-200" onClick={() => handleDeleteClick(item.id)}>delete</li>
              </ul>
            </div>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default Table
