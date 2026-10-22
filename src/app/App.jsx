import Header from "./header/Header";
import About from "../features/about/About";
import Home from "../features/home/Home";
import Skills from "../features/skills/Skills";
import Services from "../features/services/Services";
import Portfolio from "../features/portfolio/Portfolio";
import Contact from "../features/contact/Contact";
import { LocaleProvider } from "./LocaleContext";

function App() {
  return (
    <LocaleProvider>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </LocaleProvider>
  );
}

export default App;
