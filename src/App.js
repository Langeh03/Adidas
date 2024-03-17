import Nav from "./Components/NavigationBar/Navigation"
import Advert from "./Components/Advert/Advert";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Opinion from "./Components/Opinion/Opinion"
import Promotion from "./Components/Promotion/Promotion";
import Footer from "./Components/Footer/Footer";
import Arrivals from "./Components/NewArrivals/Arrivals";
import Brand from "./Components/Brand/Brand";
import Popular from "./Components/Popular/Popular";

function App() {
  return (
      <>
        <Nav/>
        <Advert/>
        <Main/>
        <Arrivals/>
        <Brand/>
        <Popular/>
        <About/>
        <Opinion/>
        <Promotion/>
        <Footer/>
      </>
  );
}

export default App;
