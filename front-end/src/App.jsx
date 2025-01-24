import './styles/App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import DataComponent from './components/DataComponent'

function App() {

  return (
    <body>
      <HeaderComponent/>
      <main>
        <h2>Esto es del App.jsx</h2>
        <DataComponent/>
      </main>
      <FooterComponent/>
    </body>
  )
}

export default App