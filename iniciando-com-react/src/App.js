import React from 'react';

function App (props) {
  
  const modificarNome = (event) => {
    console.log(event.target.value)
  } 

  const criaCombobox = () => {
    const opcoes = ['Fulano', 'Cicrano']
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>) 

    return(
      <select>
       {comboBoxOpcoes}
      </select>

    )
  }
  
    const MeuComboBox = () => criaCombobox() 

    return (
      <>
        <input className="text-centralizado" type="text" value={props.nome} onChange={modificarNome}/>
        <h1> Hello {props.nome} e tem {props.idade} anos</h1>
         <MeuComboBox/>
      </>
    )
  
}

export default App;