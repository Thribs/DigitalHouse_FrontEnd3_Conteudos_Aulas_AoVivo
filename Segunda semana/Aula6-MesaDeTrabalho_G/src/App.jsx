import './App.css'
import React from 'react'

/* Array de cidades que deve ser utilizado */
const cities = [
  {
    id: 1,
    country: "BRA",
    city: "São Paulo",
    population: "12.396.372",
    color: "#A440E2"
  },
  {
    id: 2,
    country: "AR",
    city: "Buenos Aires",
    population: "2.890.151",
    color: "#D7B81D"
  },
  {
    id: 3,
    country: "BRA",
    city: "Rio de Janeiro",
    population: "6.775.561",
    color: "#470F69"
  },
  {
    id: 4,
    country: "AR",
    city: "La Plata",
    population: "643.133",
    color: "#C37F19"
  },
  {
    id: 5,
    country: "BRA",
    city: "Brasília",
    population: "3.094.325",
    color: "#97198B"
  },
  {
    id: 6,
    country: "BRA",
    city: "Salvador",
    population: "2.900.319",
    color: "#6550ED"
  },

  {
    id: 7,
    country: "BRA",
    city: "Fortaleza",
    population: "2.703.391",
    color: "#2E15D0"
  },
  {
    id: 8,
    country: "AR",
    city: "Córdoba",
    population: "1.317.298",
    color: "#ED3D48"
  },
  {
    id: 9,
    country: "AR",
    city: "Rosário",
    population: "1.193.605",
    color: "#DA0C19"
  },
  {
    id: 10,
    country: "AR",
    city: "Mendoza",
    population: "1.200.000",
    color: "#B94310"
  }
];

/* Componente funcional que recebe lista de cidades, verifica e as renderiza em tela */
function RenderizaCidades(props) {
  return (
    <div>
      {props.items.map((item) => {
        if (item.country == "BRA") {
          return <React.Fragment key={item.id} >
            <h2>ID {item.id}</h2>
            <h1 style={{ color: item.color }}>{item.city}</h1> {/* Utilizando a cor que foi recebida junto no objeto JS */}
            <h3>{item.country}</h3>
            <p>{item.population}</p>
          </React.Fragment>
        }
      })}
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <React.Fragment>
        {/* Componente que renderiza as cidades específicas */}
        <RenderizaCidades items={cities} />
      </React.Fragment>
    </div>
  )
}

export default App