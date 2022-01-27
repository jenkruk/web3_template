import React from 'react';
import content from '../content';
import Card from '../components/Card';
import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import GlobalStyles from '../components/styles/Global';
import Header from '../components/MembersOnlyHeader';
import Footer from '../components/Footer';
// import NFTRow from "../components/NFTRow";

const MembersOnly = () => {

  return (
    <>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        {content.map((item, index) => (
            <Card key={index} item={item} />
        ))}
        <Footer />
    </ThemeProvider>   
  </>
    );
};

export default MembersOnly;
