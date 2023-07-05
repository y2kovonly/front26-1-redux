import Form from '../components/Form'
import Table from '../components/Table'
import SearchForm from '../components/SearchForm'


const TodoListPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <span className='text-2xl col-span-full'>Список дел</span>
      <Form />
      <SearchForm />
      <Table />
    </div>
  )
}

export default TodoListPage
