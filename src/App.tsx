import logo from "./logo.svg"
import { Counter } from "./components/grade/Grade"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header/Header"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Counter />
      
      </header>
    </div>
  )
}

export default App
