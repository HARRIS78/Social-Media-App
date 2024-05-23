
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Createpost from './Components/Createpost'
import Postlist from './Components/Postlist'
import { useState } from 'react'
import PostListProvider from './Store/Postliststore'



function App() {
  const [selectedtab,setselectedtab] = useState("Home")

  return (
    <PostListProvider>
    <div className='app-container'> 
     <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
     <div className='content'>
     <Header></Header>
     {selectedtab === "Home"  ? (<Postlist></Postlist>) : (<Createpost></Createpost>)}
     
     
      <Footer></Footer>
      </div>
      </div>
      
      </PostListProvider>
  )
}

export default App
