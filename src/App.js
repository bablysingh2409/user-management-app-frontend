import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";

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
