
import { createBrowserRouter } from 'react-router'
import Layout from '../Layouts/Layout.jsx'
import Index from '../Components/Users/index.jsx'
import Create from '../Components/Forms/create.jsx';
import Edit from '../Components/Forms/Edit.jsx';

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
      },
      {
        path:"create",
        element:<Create/>
      },
      {
        path:"edit/:id",
        element:<Edit/>
      }
       
      
    ]
  }
]);
  export default router;