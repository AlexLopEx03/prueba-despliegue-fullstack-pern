import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainFooterComponent from './components/footerComponents/MainFooterComponent'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{<App />}
		<MainFooterComponent saludo='prop' dato='example'/>
	</StrictMode>,
)
