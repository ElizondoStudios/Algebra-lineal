import React from 'react'
import Entrada_sistema from '../components/Entrada_sistema'
import Matriz_aumentada from '../components/Matriz_aumentada';

// Usar MA como estado para poder enviarlo a Matriz_aumentada e imprimir correctamente la matriz 

function App() {
  const [dimensionSistema, setDimensionSistema]= React.useState("2x2");
  const [mostarMA, setMostrarMA]= React.useState(false)
  // const [MA, setMA]= React.useState([[],[],[]])
  let MA=[[],[],[]]

  function cambiarSistema(dim){
    setDimensionSistema(dim);
  }

  function interpretar(ecuacion, renglon){
    let xposc, yposc, zposc, equalposc
    xposc= ecuacion.indexOf("x")
    yposc= ecuacion.indexOf("y")
    zposc= ecuacion.indexOf("z")
    equalposc= ecuacion.indexOf("=")

    if(xposc===-1)
      MA[renglon][0]="0"
    else
      MA[renglon][0]= ecuacion[0]==="+"? ecuacion.slice(1, xposc): ecuacion.slice(0, xposc)

    if(yposc===-1)
      MA[renglon][1]="0"
    else
      MA[renglon][1]= ecuacion[xposc+1]==="+"? ecuacion.slice(xposc+2, yposc): ecuacion.slice(xposc+1, yposc)

    if(zposc===-1)
      MA[renglon][2]="0"
    else
      MA[renglon][2]= ecuacion[yposc+1]==="+"? ecuacion.slice(yposc+2, zposc): ecuacion.slice(yposc+1, zposc)

    if(equalposc===-1)
      MA[renglon][3]="0"
    else
      MA[renglon][3]= ecuacion.slice(equalposc+1)
  }

  function crearMA(sistema){
    const[ecuacion1, ecuacion2, ecuacion3]=sistema
    interpretar(ecuacion1, 0)
    interpretar(ecuacion2, 1)
    if(ecuacion3) interpretar(ecuacion3, 2)
    console.table(MA)
    setMostrarMA(true)
  }

  return (
    <div className="App">
      <h1>Sistema {dimensionSistema}</h1>
      <Entrada_sistema
       sistema={dimensionSistema}
       cambiarSistema={cambiarSistema}
       crearMA={crearMA}
      />
      {mostarMA && 
        <Matriz_aumentada 
        />
      }
    </div>
  )
}

export default App
