import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExpertisePage from "./pages/ExpertisePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import People from "./pages/People";
import SearchProduct from "./pages/SearchProduct";
import Career from "./pages/Career";
import CategoryWiseProject from "./pages/CategoryWiseProject";
import CategoryProjectPage from "./pages/CategoryProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allCategory" element={<CategoryProjectPage />} />
        <Route path="/category/:slug" element={<CategoryWiseProject />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people" element={<People />} />
        {/* <Route path="/search" element={<SearchProduct />} /> */}
        <Route
          path="*"
          element={
            <div className="py-32">
              <h1 className="text-red-500 text-3xl text-center">
                404 Page not found
              </h1>
              <Link to="/" className="block text-white text-center mt-5 cursor-pointer">
                Go to Home
              </Link>
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
