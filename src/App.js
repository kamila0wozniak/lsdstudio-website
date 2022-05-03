import styles from'./App.css';
import Awards from "./components/Awards";
import Blog from "./components/Blog";
import Uslugi from "./components/Uslugi";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import x from './img/x.png';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

function App() {



  return (
        <Router>
          <div>
            <nav>
              <img src={x} alt="Logo" className={styles.x}/>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/projects">projekty</Link>
                </li>
                <li>
                  <Link to="/uslugi">o nas</Link>
                </li>
                <li>
                  <Link to="/awards">kariera</Link>
                </li>
                <li>
                  <Link to="/blog">blog</Link>
                </li>
                <li>
                  <Link to="/contact">kontakt</Link>
                </li>
              </ul>
            </nav>

            <Routes>

              <Route path="/contact" element={<Contact />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/uslugi" element={<Uslugi />}/>
              <Route path="/awards" element={<Awards />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/" element={<HomePage />}/>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
