import SideBar from './containers/SideBar';
import About from './containers/About';
import Projects from './containers/Projects';
import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  );
}

export default App;
