import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing';
import Education from './pages/Education';
import { Locations } from './pages/locations';
import { AppWindow } from 'lucide-react';
import AppLayout from './layouts/app-layout';
import Favourites from './components/favourites';


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children: [
      {
        path:'/',
        element:<Landing/>,
      },
      {
        path:'/favourites-pgs',
        element:<Favourites/>,
      },
      {
        path:'/education',
        element:<Education/>,
      },
      {
        path:'/listed-PGs',
        element:<Locations/>,
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