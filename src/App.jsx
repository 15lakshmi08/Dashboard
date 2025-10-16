import './App.css'
import Sales from "./components/MainContent/Sales/Sales"
import Visitor from "./components/MainContent/Visitor/Visitor"
import Order from "./components/MainContent/Order/Order"
import Footer from "./components/Footer/Footer"
import Dashboard from "./components/MainContent/Dashboard/Card"
import Sidebar from "./components/Sidebar/Sidebar"
import Income from  "./components/MainContent/Income/Income"
import Transaction from "./components/MainContent/Transaction/Transaction"
import Profile from './components/Header/Profile'
import Login from "./components/Sidebar/Authentication/Login"


import Layout from "./components/Layout/Layout"

function App() {

  return (
    <>
        {/* <Sidebar/>
        <Dashboard/>
        <Income/>
        <Transaction/>
        <Visitor/>
        <Order />
        <Sales />
        <Footer/> */}

      
      {/* <Layout/> */}




        <Login/>
        <Layout>
          <Dashboard/>
          <Income/>
          <Transaction/>
          <Visitor/>
          <Order />
          <Sales />
        </Layout>
        <Footer/>

        {/* <Sidebar/> */}
    </>
  )
}

export default App
