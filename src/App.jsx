import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetails from "./pages/ProjectDetails";
import ExpertisePage from "./pages/ExpertisePage";
import ExpertiseDetails from "./pages/ExpertiseDetails";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/expertise/:slug" element={<ExpertiseDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:slug" element={<PeopleDetails/>} />
        <Route
          path="*"
          element={
            <div className="py-32">
              <h1 className="text-red-700 text-3xl text-center">
                404 Page not found
              </h1>
              <Link to="/" className="block text-center mt-5 cursor-pointer">
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
