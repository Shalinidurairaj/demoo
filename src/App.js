import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Setting from "./Setting"
import Register from "./Register"
import Home from "./Home"
import Cart from "./Cart"
import Dashboard from "./Dashboard"

function App() {
    return (
  
      <div>
        <Router>
            <Routes>
              <Route path='/' element={ <Setting/>}/>
              <Route path='/Register' element={ <Register/>}/>
              <Route path='/Home' element={ <Home/>}/>
              <Route path='/Cart' element={ <Cart/>}/>
              <Route path='/Dashboard' element={ <Dashboard/>}/>
              </Routes>
              </Router>
              </div>
              )
            }

  export default App