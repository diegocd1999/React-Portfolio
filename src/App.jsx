import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  useLocation
} from 'react-router-dom'


// pages
import Home from './pages/Home'
import About from './pages/About'
import Hotel from './pages/portfolio/Hotel'
import WorkoutTracker from './pages/portfolio/WorkoutTracker'
import PortfolioWebsite from './pages/portfolio/PortfolioWebsite'
import DataAnalytics from './pages/portfolio/DataAnalytics'
import NotFound from './pages/NotFound'


// layouts
import RootLayout from './layouts/RootLayout'
import ProjectsLayout from './layouts/ProjectsLayout'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route patxh="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="ProjectsLayout" element={<ProjectsLayout />}>
        <Route path="WorkoutTracker" element={<WorkoutTracker />} />
        <Route path="PortfolioWebsite" element={<PortfolioWebsite/>} />
        <Route path='Hotel' element={<Hotel/>} />
        <Route path='DataAnalytics' element={<DataAnalytics/>} />  
        
        
      </Route>
    

      <Route path="*" element={<NotFound />} />
    </Route>
  
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App