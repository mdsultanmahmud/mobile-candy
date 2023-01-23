import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
