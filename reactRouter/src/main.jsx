import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Layout from './Layouts/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import { createBrowserRouter } from 'react-router'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { gitHubInfoLoader } from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [ 
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userName',
        element: <User />
      },
      {
        loader: gitHubInfoLoader,
        path: 'github',
        element: <Github />
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
) 
