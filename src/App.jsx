import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";
import { contents } from "./assets/data/data";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </>
  );
}

export default App;
