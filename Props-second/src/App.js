import { useState } from 'react';
import './App.css';
import ComponenteFilho from './components/ComponenteFilho';

function App() {
  const [estadoPai, setEstadoPai] = useState('não clicou')
  const [estadoFilho, setEstadoFilho] = useState('não clicou')
  const handleClick = () => {
    setEstadoFilho('clicou')
  }
  return (
    <div>
      <h1>botão localizado no Componente Filho {estadoPai}</h1>
      <button onClick={handleClick}>Clique aqui para alterar o componente Pai</button>
      <ComponenteFilho 
        setEstadoPai={setEstadoPai}
        estadoFilho={estadoFilho}
      />
    </div>
  );
}

export default App;