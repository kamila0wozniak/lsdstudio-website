import styles from'./App.css';
import Nagrody from "./components/Nagrody";
import Blog from "./components/Blog";
import Uslugi from "./components/Uslugi";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import logo from './img/logo.jpg';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

function App() {
  return (
        <Router>
          <div>
            <nav>
              <img src={logo} alt="Logo" className={styles.logoNavbar}/>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/projects">projekty</Link>
                </li>
                <li>
                  <Link to="/uslugi">uslugi</Link>
                </li>
                <li>
                  <Link to="/nagrody">nagrody</Link>
                </li>
                <li>
                  <Link to="/blog">blog</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/uslugi" element={<Uslugi />}/>
              <Route path="/nagrody" element={<Nagrody />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/" element={<HomePage />}/>
            </Routes>
          </div>
        </Router>
  );
}

export default App;
