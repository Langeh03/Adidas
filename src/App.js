import Nav from "./Components/NavigationBar/Navigation"
import About from "./Components/About/About";
import Count from "./Components/Opinion/Opinion"
import Promotion from "./Components/Promotion/Promotion";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

function App() {
  return (
      <>
        <Nav/>
        <Main/>
        <About/>
        <Count/>
        <Promotion/>
        <Footer/>
      </>
  );
}

export default App;
