import { useState } from 'react';
import { ActionIcon, createStyles, AspectRatio, Header, Center, Container, Group, Burger, Paper, Transition, Title,useMantineTheme, ColorScheme  } from '@mantine/core';
import { useDisclosure,useColorScheme } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import logo from '../../assets/jectree_blue.svg';

import { IconSun, IconMoonStars } from '@tabler/icons';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    logo: {
        marginRight: '50%',
        width: '50px',

    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface HeaderResponsiveProps {
    links: { link: string; label: string }[],
    toggleColor: any,
    colorScheme: ColorScheme

}

export function HeaderResponsive({ links, toggleColor,colorScheme }: HeaderResponsiveProps) {

    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const theme = useMantineTheme();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                close();
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={HEADER_HEIGHT} mb={0} className={classes.root}>
            <Container className={classes.header}>
                <div className={classes.logo}>
                    <div>

                        <Center inline>
                            <img src={logo} />

                            <h1>
                                Jectree
                            </h1>

                        </Center>

                    </div>


                    {/* <MantineLogo size={28} /> */}


                </div>

                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <ActionIcon
                    variant="outline"
                    color={colorScheme === 'dark' ? 'yellow' : 'blue'}
                    onClick={colorScheme === 'dark' ? ()=> toggleColor('light') : ()=> toggleColor('dark')}
                    title="Toggle color scheme"
                >
                    {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}