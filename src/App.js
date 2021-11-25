import React from 'react'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Panel from './components/Panel';


function App() {
  return (
    <div>
      <Header/>
      <Panel/>
      <Sidebar/>
      
    </div>
  )
  
}


export default App
