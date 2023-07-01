import { useState } from 'react';


const UserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || age < 1) return;

    //
    setName('');
    setAge(0);
  }


  return (
    <div className='grid grid-cols-2 gap-6'>
      <span className='text-2xl col-span-full'>Страница пользователя</span>
      <form 
        onSubmit={handleSubmit} 
        className="w-full col-span-full md:col-start-1 md:col-end-2 flex flex-col justify-center gap-3">
        <input 
          type="text" 
          className='rounded-sm px-1'
          placeholder='Имя пользователя'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="number" 
          className='rounded-sm px-1'
          placeholder='Возраст'
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button 
          type="submit" 
          className='bg-slate-300 px-2 py-1 rounded-md'>Сохранить</button>
      </form>
      <div className='col-span-full md:col-start-2 md:col-end-3'>
        {name && age && (       
          <>    
            <span className='w-full inline-block'>Имя: </span>
            <span className='w-full inline-block'>Возраст: </span>
          </>
        )}
      </div>
    </div>
  )
}

export default UserPage 
