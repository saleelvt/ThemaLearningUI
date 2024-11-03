
import React from "react"
import './global.css';
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import  CurvedSliderCards from "./components/cards"



export const App:React.FC = React.memo(()=>{

  
  return ( 
    <div className= "project-div ">
      <Navbar/>
      <Header/>
      <CurvedSliderCards/>
    </div>
  )


})