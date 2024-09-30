import React,{useState,useEffect} from 'react';
import './App.css';
import Loading from './components/Loading';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import TitlePage from './components/Title'
import IntroPage from './components/Intro'
import WorkPage from './components/Work'
import Contact from './components/Contact/index.js'
import Root from './components/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
          <Route path="/title" element={<TitlePage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/work" element={<WorkPage />}>
              <Route path="/work/:workId" element={<WorkPage />}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
      </Route>
  )
  )
function App(){
  const[isLoading,setIsLoading] = useState(true); 
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },2400)
    return ()=> clearTimeout(timer);
  },[])
  return (
    <div className="App">
      {isLoading? <Loading/>:<RouterProvider router={router} />}
    </div>
  );
}

export default App;
