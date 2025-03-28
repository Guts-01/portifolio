import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './global/globalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <GlobalStyle />   {/* < Estilo Global da aplicação */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
        </BrowserRouter> 
    </StrictMode>

)
