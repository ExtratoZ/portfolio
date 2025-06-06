import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';

import SideBar from './containers/SideBar';
import About from './containers/About';
import Projects from './containers/Projects';
import GlobalStyle, { Container } from './styles';
import { useState } from 'react';

function App() {
  const [stateDarkTheme, setStateDarkTheme] = useState(false);

  function changeTheme() {
    setStateDarkTheme(!stateDarkTheme);
  }

  return (
    <ThemeProvider theme={stateDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <SideBar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
