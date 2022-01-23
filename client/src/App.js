import React from "react";
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Mint from './Web3/Mint';
import { ThemeProvider } from 'styled-components';
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import NoRoute from "./components/NoRoute";
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import {Container} from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
// import content from './content';
import theme from './components/styles/theme'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {/* {content.map((item, index) => (
            <Card key={index} item={item} />
          ))} */}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App

