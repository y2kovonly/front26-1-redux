import { useState } from 'react';


const UserPage = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    //
    setUserName('')
    setUserEmail('')
    setUserPhone('')
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
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input 
          type="email" 
          className='rounded-sm px-1'
          placeholder='Email пользователя'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input 
          type="text" 
          className='rounded-sm px-1' 
          placeholder='Телефон пользователя'
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
        <button 
          type="submit" 
          className='bg-slate-300 px-2 py-1 rounded-md'>Сохранить</button>
      </form>
      <div className='col-span-full md:col-start-2 md:col-end-3'>
        <span className='w-full inline-block'>Имя: </span>
        <span className='w-full inline-block'>Email: </span>
        <span className='w-full inline-block'>Телефон: </span>
      </div>
    </div>
  )
}

export default UserPage 
