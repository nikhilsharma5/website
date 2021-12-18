import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import { DownloadIcon } from '@chakra-ui/icons'
import ScrollBox from '../components/scrollableBox'

const Resume = () => {
  return (
    <Container maxW="xxl">
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha:500', 'whiteAlpha:200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m an Engineer based out of San Francisco Bay Area!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikhil Sharma
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/1.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Cover Letter
        </Heading>

        <Box my={10}>
          <ScrollBox minHeight={200} maxHeight={450} fileName={'/NikhilSharmaCoverLetter.pdf'}/>
        </Box>
        <Box align="center" marginY="auto">
          <Button width={250} rightIcon={<DownloadIcon />} colorScheme="blue">
            <a href="/NikhilSharmaCoverLetter.pdf" download>
              Download Cover Letter
            </a>
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Resume
        </Heading>

        <Box my={10}>
        <ScrollBox minHeight={200} maxHeight={450} fileName={'/NikhilSharmaResume.pdf'}/>
        </Box>
        <Box align="center" marginY="auto">
          <Button width={250} rightIcon={<DownloadIcon />} colorScheme="blue">
            <a href="/NikhilSharmaResume.pdf" download>
              Download Resume
            </a>
          </Button>
        </Box>
      </Section>
    </Container>
  )
}

export default Resume
