import "./App.css";
import Navbar from "./components/common/Navbar";
import LandingPage from "./pages/LandingPage";
import Button from "./components/core/Button";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="bg-[#4578FF] flex flex-col items-center ">
      <Navbar />
      <LandingPage />
     <Footer/>
    </div>
  );
}

export default App;
