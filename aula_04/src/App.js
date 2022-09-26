import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App(){
  return (
    <div className="App">      
      <h1>Testando Evento</h1>
      <Evento palavra="Eai"/>
      <Evento palavra="Tudo bem?"/>
      <Form />
    </div>
  );
}

export default App;