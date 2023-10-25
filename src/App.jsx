import { Header } from "./components/Header";
import "./App.css";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Events } from "./components/Events";
import { Projects } from "./components/Projects";
import { AnimatedSection } from "./components/AnimatedSection";

function App() {
  return (
    <>
      <AnimatedSection />
      <div className="container">
        <Header />

        <About />

        <Skills />

        <Events />

        <Projects />
      </div>
    </>
  );
}

export default App;
