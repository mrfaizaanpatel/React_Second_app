// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Nav from './component/Nav';
import NotFound from './component/NotFound';
import Courses from './component/Courses';
import GitHubCard from './component/GitHubCard';
import CoursesItem from './component/CoursesItem';
import { Children } from 'react';

const router = createBrowserRouter([
  
  {
    path: "/about",
    element: <> <Nav /> <About /> <Footer/> </>
  },

  {
    path: "/contact/:id",
    element: <> <Nav /> <Contact /> <Footer/> </>
  },

  {
    path: "/",
    element: <> <Nav /> <Footer/> </>
  },

  {
    path:"*",
    element:<><NotFound/></>
  },

  {
    path:"courses",
    element:
    <>
    <Nav/>
    <Courses/>
    <Footer/>
    </>,
    children:[
      {
        index:true,
       element:<>
          <CoursesItem id={3} name="Core java" fees={50000}/>,
          <CoursesItem id={1} name="Web-Desinging" fees={20000}/> 

       </>

      },
      {
        path:"web-Designing",
        element: <CoursesItem id={1} name="Web-Desinging" fees={20000}/>       
      },
      {
        path:"sql",
        element: <CoursesItem id={2} name="Foundation with sql" fees={30000}/>
      },
      {
        path:"java",
        element: <CoursesItem id={3} name="Core java" fees={50000}/>
      }
    ]
  },
  
  {path:"gitHubCard",
    element:<GitHubCard/>
  }
  
])

function App() {
  return (
    <div>


      <RouterProvider router={router} />
    </div>
  );
}

export default App;
