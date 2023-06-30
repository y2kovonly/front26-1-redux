import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CounterPage from './pages/CounterPage'
import TodoListPage from './pages/TodoListPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="todos" element={<TodoListPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
