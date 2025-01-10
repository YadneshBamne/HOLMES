import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing';
import Education from './pages/Education';


const router = createBrowserRouter([
  {
    element:<Landing/>,
    children: [
      {
        path:'/',
        element:<Landing/>,
      },
      {
        path:'/education',
        element:<Education/>,
      },
    ],
  },
]);

function App() {
  
  return (
      <RouterProvider router={router}/>
  );
}

export default App