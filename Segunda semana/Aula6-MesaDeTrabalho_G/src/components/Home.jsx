import React from 'react';

/* Importando o módulo CSS */
import styleModule from './home.module.css';

/* Componente do tipo funcional */
function HomeComponent(props) {
    return (<div>
        {props.items.map((item) => {
            if (item.country == "BRA") {
                return <React.Fragment key={item.id} >
                    <h2>ID {item.id}</h2>
                    {/* CSS InLine: Aproveitando a cor disponibilizada no próprio objeto JS */}
                    <h1 style={{ color: item.color }}>{item.city}</h1>
                    <h3>{item.country}</h3>
                    {/* CSS Module */}
                    <p className={styleModule.fonte}>{item.population}</p>
                </React.Fragment>
            }
        })}
    </div>)
}
export default HomeComponent;