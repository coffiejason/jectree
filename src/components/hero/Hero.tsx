import { createStyles, Container, Text, Center, Button, Group, Modal, Input, Tooltip } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import Brands from '../brands/Brands';
import { useState } from 'react';

const BREAKPOINT = '@media (max-width: 755px)';

import { IconAt, IconUpload, IconBrandWhatsapp, IconAlertCircle, IconUsers } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    [BREAKPOINT]: {
      marginTop: 50
    },
  },

  inner: {
    position: 'relative',
    paddingTop: 150,
    paddingBottom: 50,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 750,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function HeroTitle() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>

      <Modal centered
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
      >
        <Center sx={{ width: '100%', marginBottom: 20 }}><Text weight={900}>JOIN OUR WAITLIST</Text></Center>

        <Input.Wrapper label="Your email" required>
          <Input
            icon={<IconAt size={20} />}
            placeholder="email@example.com"

            sx={{ marginBottom: 20 }}
          />

        </Input.Wrapper>

        <Input.Wrapper label="Your WhatsApp">
          <Input
            icon={<IconBrandWhatsapp size={20} />}
            placeholder="+233 50 000 0000"
            sx={{ marginBottom: 20 }}
            rightSection={
              <Tooltip label="By filling this you consent to receiving messages from us" position="top-end" withArrow>
                <div>
                  <IconAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
                </div>
              </Tooltip>
            }
          />
        </Input.Wrapper>

        <Button leftIcon={<IconUsers size={14} />} variant="gradient" sx={{marginBottom:20}} gradient={{ from: 'indigo', to: 'cyan' }}>Join waitlist</Button>
      </Modal>

      <div className={classes.wrapper} >
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              Re-think
            </Text>{' '}
            Your Current Path.
          </h1>

          <Text className={classes.description} color="dimmed">
            Consider all your options. Make informed decisions, about your career, education and life.
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              onClick={() => setOpened(true)}
            >
              Join the waitlist
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className={classes.control}
              leftIcon={<GithubIcon size={20} />}
            >
              GitHub
            </Button>
          </Group>
          <Brands />
        </Container>
      </div>
    </>

  );
}