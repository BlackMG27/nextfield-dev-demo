import React , {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {Box, Container,Text, Grid, GridItem } from '@chakra-ui/react';
import { getLearningResources } from '../src/lib/api'

export default function Home({source}) {
  return (
    <Fragment>
      <Head>
          <title>NextField Demo</title>
      </Head>
      <Box bg="blue.50">
        <Container pt="2rem" maxW="80vw" minH="100vh">
          <Text fontSize="2rem" textAlign="center">Learning Resources</Text>
          <Grid 
          maxW="100%" 
          gridTemplateColumns="repeat(auto-fit, minmax(315px, 1fr))"
          columnGap="10px"
          rowGap="10px"
          >
            {
              source.map((list) => (
                <GridItem 
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="5px"
                  bg="white"
                  alignContent="left"
                  key={list.id}
                  p="15px"
                  display="grid"
                  _hover={{boxShadow: "md"}}
                >
                  <Text fontSize="1.25rem">{list.title}</Text>
                  {
                    list.gradeLevel.map((grade, index) => (
                      <Text key={index}>{grade}</Text>
                    ))
                  }
                  {
                    list.topicArea.map((top, index) => (
                      <Text key={index}>{top}</Text>
                    ))
                  }

                </GridItem>
              ))
            }
          </Grid>

        </Container>
      </Box>
    </Fragment>
  )
}

export async function getServerSideProps(){
  const source = await getLearningResources()
  return{
    props: {
      source,
    }
  }
}
