const items = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
]

const Table = () => {

  const handleDeleteClick = (id) => {
    console.log(id)
  }

  const handleCheckClick = (id) => {
    console.log(id)
  }


  return (
    <>
      <div className="grid grid-cols-1 grid-rows-min gap-2 w-full text-sm text-left text-gray-table-auto border-collapse border-spacing-2 @container">
        { items.map((item) => (
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
            <div className="py-1">
              <button
                className=' text-red-500 px-2 rounded-sm'
                onClick={() => handleDeleteClick(item.id)}
              >&#128465;</button>
            </div>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default Table
