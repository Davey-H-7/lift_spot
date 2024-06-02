import './App.css'
import MainContainer from './containers/MainContainer'
import {BrowserRouter as Router} from'react-router-dom'

function App() {
 

  return (
    <div className ="App">
    <Router>
      <MainContainer/>
    </Router>
   
    </div>
  )
}

export default App
