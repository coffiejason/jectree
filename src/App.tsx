import { ActionIcon, MantineProvider, Text, ColorSchemeProvider, ColorScheme, createStyles } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
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
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const dark = colorScheme === 'dark';
  const { classes } = useStyles();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme: colorScheme, }} withGlobalStyles withNormalizeCSS>
        <Header links={[{ "link": "Home", "label": "Home" }, { "link": "Home", "label": "Myth Vs Fact" }, { "link": "Home", "label": "Contact Us" }]} />
        {/* <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"

            className={classes.toggle}
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon> */}
        <HeroTitle />


      </MantineProvider>
    </ColorSchemeProvider>
  );
}