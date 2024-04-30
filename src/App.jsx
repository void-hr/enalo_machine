import SignUp from "./components/SignUp/SignUp"
import "./App.css"
import banner from "./assets/banner.png";
function App() {

  return (
    <div className="container">
    <img src={banner} alt="background" className="container_img"/>
    <SignUp />
    </div>
  )
}

export default App
