import React,{useState,useEffect} from 'react';
import './App.css';
import Loading from './components/html/Loading';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import Title from './components/Title'
import Intro from './components/Intro'
import Work from './components/Work'
import Contact from './components/Contact'
import Root from './components/html/Root'
import { AnimatePresence, motion } from 'framer-motion';
import "./css/main.css"

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
          <Route path="/title" element={<Title />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
      </Route>
  )
  )
function App(){
  const[isLoading,setIsLoading] = useState(true); 

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },10000)
    return ()=> clearTimeout(timer);
  },[])

  const SKIP = ()=>{
    setIsLoading(false);
  }
  return (
    <div className="App">
          {isLoading? <Loading isLoading ={isLoading} onSkip={SKIP}/>:
          <AnimatePresence mode='wait'>
          <motion.div
          initial={{ opacity: 0,
          }}
          animate={{ opacity: 1
          }}
          exit={{ opacity: 0
          }}
          transition={{ duration: 1}}
          >
          <RouterProvider router={router}/>
          </motion.div>
          </AnimatePresence>
        }
    </div>
  );
}

export default App;
