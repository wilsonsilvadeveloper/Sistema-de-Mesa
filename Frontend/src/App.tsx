import './App.css'
import Form from './components/Form/Form'

function App() {

  const handleBtn = (typeUser: string) => {
    alert(typeUser + ' estar acessando o sistema');
  }

  return (
    <div>
      <Form method='post'>
        <h2>Você é?</h2>
        <button type='button' style={{marginRight: 10}} onClick={()=>  handleBtn('adm')}>Adm</button>
        <button type='button' style={{marginLeft: 10}} onClick={()=>  handleBtn('garçon')}>Garçon</button>
      </Form>
    </div>
  )
}

export default App
