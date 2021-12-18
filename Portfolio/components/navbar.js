import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'darkgoldenrod' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="Nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blue(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="contain.md"
        wrap="wrap"
        aligh="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="centerflexGrow={1}"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem pt={3} href="/resume" path={path}>
            Resume & Cover Letter
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://www.linkedin.com/in/nikhil-sharma-3020b7107/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/nikhilsharma5"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://www.instagram.com/nik_sharma/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton as={Button} variant="outline" aria-label="Options">
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <NextLink href="/resume" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://www.linkedin.com/in/nikhil-sharma-3020b7107/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/nikhilsharma5"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://www.instagram.com/nik_sharma/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Instagram
                </MenuItem>
                <MenuItem as={Link} href="http://localhost:3000">
                  Home Page
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
