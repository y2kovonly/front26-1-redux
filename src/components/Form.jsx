import { useState } from 'react';

const Form = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    //
    setNewTodo('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full flex justify-center gap-3">
        <input 
          type="text" 
          className='rounded-sm px-1' 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)}/>
        <button type="submit" className="w-8 bg-slate-300 px-2 py-1 rounded-sm">+</button>
      </form>
    </div>
  )
}

export default Form
