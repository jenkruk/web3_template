import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import GlobalStyles from '../components/styles/Global';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Footer />
        </ThemeProvider>
        </>
      )
};

export default Home;
