import { Header } from "./components/Header";
import { About } from "./components/About";
import { Timeline } from "./components/timeline/Timeline";
import { Competences } from "./components/competences/Competences";

import styled from "styled-components";
import { Contact } from "./components/Contact";
import { TechnologiesExplored } from "./components/technologies-explored/TechnologiesExplored";
import { Hobbies } from "./components/Hobbies";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ContentWrapper>
      <Header />
      <About />
      <Timeline />
      <Competences />
      <TechnologiesExplored />
      <Hobbies />
      <Contact />
    </ContentWrapper>
  );
}

export default App;
