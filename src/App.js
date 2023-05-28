import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>

      <Skills />

      <LightColor>
        <Education />
      </LightColor>

      <Experience />

      <LightColor>
        <Projects />
      </LightColor>

      <LightColor>
        <Contact />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
// background: #0a192f;
// background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
const Banner = styled.div`
  background: #0a192f;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

// background: #0a192f;
const LightColor = styled.div`
background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
