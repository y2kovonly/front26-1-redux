
const Table = (props) => {
  return (
    <table className="w-full text-sm text-left text-gray-table-auto border-collapse border-spacing-2">
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id} className="bg-white rounded-md text-center border-8 border-solid border-slate-100 hover:bg-slate-200">
            <td className="py-1"><input type="checkbox" className="default:ring-2 checked:bg-green" /></td>
            <td className="py-1">{item.id}</td>
            <td className="py-1">{item.name}</td>
            <td>
              <button
                className='border border-red-300 text-red-500 px-2 rounded-sm'
              >&#128465;</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
