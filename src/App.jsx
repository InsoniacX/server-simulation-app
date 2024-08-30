import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
  } from 'react-router-dom'
  
  import RootLayout from './components/layouts/RootLayout'
  import Home from './pages/LandingPage'
//   import About from './pages/AboutPage'
  import Simulation from './pages/SimulationPage'
  import Brands from './pages/Brands';
  import Blog from './pages/Blog';
  import Dashboard from './pages/Dashboard'
  import NotFound from './ErrorPage' // optional, untuk halaman 404
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="simulation" element={<Simulation />} />
        <Route path="brands" element={<Brands />} />
        <Route path="blog" element={<Blog />} />
        <Route path='admin' element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> {/* optional: rute untuk halaman 404 */}
      </Route>
    )
  )
  
  function App() {
    return (
      <RouterProvider router={router} />
    )
  }
  
  export default App
  