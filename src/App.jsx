import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CounterPage from './pages/CounterPage'
import TodoListPage from './pages/TodoListPage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Home</h2>} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="todos" element={<TodoListPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
