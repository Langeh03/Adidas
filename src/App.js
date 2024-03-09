import Nav from "./Components/NavigationBar/Navigation"
import Advert from "./Components/Advert/Advert";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Opinion from "./Components/Opinion/Opinion"
import Promotion from "./Components/Promotion/Promotion";
import Footer from "./Components/Footer/Footer";
import Arrivals from "./Components/NewArrivals/Arrivals";

function App() {
  return (
      <>
        <Nav/>
        <Advert/>
        <Main/>
        <Arrivals/>
        <About/>
        <Opinion/>
        <Promotion/>
        <Footer/>
      </>
  );
}

export default App;
