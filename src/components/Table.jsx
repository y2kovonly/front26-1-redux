
const Table = (props) => {
  return (
    <table className="w-full text-sm text-left text-gray-table-auto border-collapse">
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id} className="border border-solid border-slate-400">
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
