import './App.css'
import Sales from "./components/MainComp/Sales/Sales"
import Visitor from "./components/MainComp/Visitor/Visitor"
import Order from "./components/MainComp/Order/Order"
import Footer from "./components/Footer/Footer"
import Dashboard from "./components/MainComp/Dashboard/Card"
import Sidebar from "./components/Sidebar/Sidebar"
import Income from  "./components/MainComp/Income/Income"
import Transaction from "./components/MainComp/Transaction/Transaction"

function App() {

  return (
    <>

        <Sidebar/>
        <Dashboard/>
        <Income/>
        <Transaction/>
        <Visitor/>
        <Order />
        <Sales />
        <Footer/>
    </>
  )
}

export default App
