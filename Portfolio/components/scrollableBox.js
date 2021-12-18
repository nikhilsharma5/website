import {
  Box,
  Collapse,
  Grid,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'

const ScrollBox = ({minHeight, maxHeight, fileName='fileName'}) => {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
  return (
    <Box
      borderColor={useColorModeValue('darkGray', 'whiteAlpha.900')}
      maxW="1000"
      maxH="500"

    >
      <Grid container justify="flex-end">
        <Button
          colorScheme="blue"
          justifySelf="flex-end"
          onClick={handleToggle}
        >
          {show ? 'Contract' : 'Expand'}
        </Button>
      </Grid>
      <br/>
      <Collapse
        overflow="auto"
        mt={4}
        startingHeight={show ? maxHeight : minHeight}
      >
      <iframe
        src={fileName}
        width="100%"
        height="100%"
        
      ></iframe>

      {/*       
      <p>Nikhil Sharma</p>
      <br />
      <p>Hiring Manager,</p>
      <Paragraph>
        As a seasoned and skilled quality engineering lead I am positive that I
        can make substantial impact in quality of the software as well as growth
        of engineers for your organization. I am thorough, organized and detail
        oriented, which is a must for this job. My management and technical
        skills are excellent and I have good amount of exposure to tools and
        technologies required for this job.
      </Paragraph>
      <Paragraph>
        At my current position I am leading a functional team of quality
        engineers, while being part of a development team. My responsibilities
        consist of mentoring and helping other Quality Engineers in designing
        Test Frameworks, Test Plans, Test Strategies, resolving blockers,
        production support, code reviews, and creating roadmaps and other
        required plans and documents.
      </Paragraph>
      <Paragraph>
        The enclosed resume provides detailed overview of my past work. I hope
        you will find my profile to be a good fit for this role. Please feel
        free to reach me at (408)-930-5589 or nikhil_sharma@aol.com.
        <br />
        <br />
        Sincerely, <br />
        Nikhil Sharma
      </Paragraph> */}
      </Collapse>
    </Box>
  )
}

export default ScrollBox
