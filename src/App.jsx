import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CounterPage from './pages/CounterPage'
import UserPage from './pages/UserPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span className='text-2xl'>Home Page</span>} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="*" element={<span className='text-2xl'>Not found</span>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
