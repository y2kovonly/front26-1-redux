import Form from '../components/Form'
import Table from '../components/Table'

const items = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
]


const TodoListPage = () => {
  return (
    <div>
      Список дел
      <Form />
      <Table items={items}/>
    </div>
  )
}

export default TodoListPage
