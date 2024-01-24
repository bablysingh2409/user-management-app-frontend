import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children:[
      {
        path:'/',
        element:<Home/>
    
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
         path:'/user-details/:id',
         element:<UserDetails/>
      },
     {
      path:'create-user',
      element:<CreateUser/>
     },
     {
      path:'edit-user/:id',
      element:<EditUser/>
     }
    ]
  }
  
])

  return (
    <RouterProvider router={router}>
    <div className="App">
      
    </div>
    </RouterProvider>
  );
}

export default App;
