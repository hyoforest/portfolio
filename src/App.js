import React,{useState,useEffect} from 'react';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import store from "./redux/store";
import './App.css';
import Title from './components/Title'
import Intro from './components/Intro'
import Work from './components/Work'
import Contact from './components/Contact'
import Root from './components/html/Root'
import Loading from './components/html/Loading';
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
    },6000)
    return ()=> clearTimeout(timer);
  },[])

  const SKIP = ()=>{
    setIsLoading(false);
  }
  return (
    <div className="App">
          {isLoading? <Loading onSkip={SKIP}/>:
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
          <RouterProvider router={router} store={store}/>
          </motion.div>
          </AnimatePresence>
        }
    </div>
  );
}

export default App;
