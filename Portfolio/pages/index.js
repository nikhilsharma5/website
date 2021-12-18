import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
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
          About Me
        </Heading>
        <Paragraph>
          I am a Software Quality Engineer currently working with Lending Club
          in San Francisco. I have been working in this industry since 2012 and
          have excellent working knowledge. You can find more about past
          experience by clicking the button below.
        </Paragraph>
        <Box align="center" my={10}>
          <NextLink href="/resume">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Resume & Cover Letter
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989-10</BioYear>
          Grew up in Delhi, India. Finished first two years of undergrad before
          moving to California in 2010.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Finished Bachelors degree in Computer Engineering.
        </BioSection>
        <BioSection>
          <BioYear>2012-16</BioYear>
          Worked as a Consultant with Cisco, PayPal & GE Healthcare
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Joined Lending Club as a Software QA Engineer.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Joined GE Healthcare as a Sr. Software QA Engineer.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Joined Lending Club as a Sr.Software QA Engineer.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Working with Lending Club as a Lead QA Engineer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Enjoy
        </Heading>
        <Paragraph>
          Snowboarding🏂, Golfing🏌🏽‍♂️, Biking, Running, Working Out, Coding👨🏽‍💻
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
