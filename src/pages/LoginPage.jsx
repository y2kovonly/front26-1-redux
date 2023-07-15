import { useState } from 'react';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='grid grid-cols-1 gap-6'>
      <span className='text-2xl col-span-full'>Страница входа</span>
      <form 
        onSubmit={handleSubmit} 
        className="w-[min(100%,20rem)] col-span-full md:col-span-1) md:col-start-1 md:col-end-2 flex flex-col justify-center gap-3">
        <input 
          type="text" 
          className='rounded-sm px-1'
          placeholder='Имя пользователя'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          className='rounded-sm px-1'
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          type="submit" 
          className='bg-slate-300 px-2 py-1 rounded-md'>Войти</button>
      </form>
    </div>
  )
}

export default LoginPage
