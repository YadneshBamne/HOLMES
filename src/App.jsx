import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing';
import AppLayout from './layouts/app-layout';


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:'/',
        element:<Landing/>,
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
