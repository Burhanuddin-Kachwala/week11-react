
import { createBrowserRouter } from 'react-router'
import Layout from '../Layouts/Layout.jsx'
import Index from '../Components/Users/index.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Index/>
      },
      {
        path:"about",
        element:<h1>About</h1>
      }
    ]
  }
]);
  export default router;