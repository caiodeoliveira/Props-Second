import React from 'react';

// import { Container } from './styles';

function ComponenteFilho(props) {
  const handleClick = () => {
    props.setEstadoPai('clicou')
  }

  return (
    <div>
      <h1>botão localizado no Componente Pai {props.estadoFilho}</h1>
      <button onClick={handleClick}>Clique aqui para alterar o componente Filho</button>
    </div>
  )
}

export default ComponenteFilho;