import {createBrowserRouter,Navigate,Route,RouterProvider, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import UserDetails from "./components/UserDetails";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import { useSelector } from "react-redux";
import { authSelector } from "./redux/reducers/authReducer";

function App() {
  const {isAuthenticated}=useSelector(authSelector);

const router=createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children:[
      {
        path:'/',
        // element:isAuthenticated ? <Home/>: <Navigate to="/" />
        element:<Home/>
    
      },
      {
        path:'/signup',
        element: !isAuthenticated ?<Signup/>:<Navigate to="/" />
      },
      {
        path:'/login',
        element:!isAuthenticated? <Login/>: <Navigate to="/" />
      },
      {
         path:'/user-details/:id',
         element:isAuthenticated ? <UserDetails/>: <Navigate to="/" />
      },
     {
      path:'create-user',
      element:isAuthenticated ?<CreateUser/>:<Navigate to="/" />
     },
     {
      path:'edit-user/:id',
      element:isAuthenticated ?<EditUser/>:<Navigate to="/" />
     }
    ]
  }
  
])

  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
