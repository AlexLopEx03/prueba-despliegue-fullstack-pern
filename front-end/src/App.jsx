<<<<<<< HEAD
import './styles/App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
=======
import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
>>>>>>> 7936788c5522e20399c3532a01974d83fe3383ea

function App() {

  return (
<<<<<<< HEAD
    <body>
      <HeaderComponent/>
      <main>
        <h2>Esto es del App.jsx</h2>
      </main>
      <FooterComponent/>
    </body>
=======
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> 7936788c5522e20399c3532a01974d83fe3383ea
  )
}

export default App
