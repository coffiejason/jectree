import { MantineProvider, Text, ColorSchemeProvider, ColorScheme, createStyles } from '@mantine/core';
import { createContext } from 'react';

import { useState } from 'react';
import { Brands, Header, HeroTitle } from './components';
import './App.css';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme, _params, getRef) => ({
  toggle: {
    marginLeft: '95%',
    marginTop: 10,

    [BREAKPOINT]: {
      marginLeft: '90%',
    },
  }
}));

export default function App(this: any) {


  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (

    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme: colorScheme, }} withGlobalStyles withNormalizeCSS>
      <Header links={[{ "link": "Home", "label": "Home" }, { "link": "Home", "label": "Myth Vs Fact" }, { "link": "Home", "label": "Contact Us" }]} toggleColor={toggleColorScheme} colorScheme={colorScheme}/>
      <HeroTitle />
    </MantineProvider>
  </ColorSchemeProvider>

  );
}