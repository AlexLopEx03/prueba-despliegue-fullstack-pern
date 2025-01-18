import React from 'react'

function MainFooterComponent(props) {
    
    const peticion = () => {
        fetch('https://prueba-despliegue-fullstack-pern-api.onrender.com/prueba/get')
            .then((res) => res.text())
            .then((data) => {
                alert(`Respuesta del servidor: ${data}`)
            })
            .catch((error) => alert(`Error en la solicitud: ${error}`))
    }
    return (
        <>
            <div>MainFooterComponent + {props.saludo} + {props.dato}</div>
            <button onClick={peticion}>Fetch</button>
        </>
    )
}

export default MainFooterComponent