
const CounterPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-2">
      <span className="w-full">Счетчик</span>
      <div className="w-full flex justify-center items-start gap-4">
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>0</span>
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">+</button>
      </div>
    </div>
  )
}

export default CounterPage
