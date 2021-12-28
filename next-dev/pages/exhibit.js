import React, {Fragment} from "react";
import Head from 'next/head';
import {Box, Grid, Container, GridItem, Text} from '@chakra-ui/react'
import { getExhibition } from "../src/lib/api";

export default function Exhibit({exhibit}){
    return(
        <Fragment>
            <Head>
                <title>{exhibit.title}</title>
            </Head>
            <Box bg="blue.50">
                <Container pt="2rem" maxW="80vw" minH="100vh">
                <Text fontSize="2rem" textAlign="center">{exhibit.title}</Text>
                </Container>
            </Box>
        </Fragment>
    )
}

export async function getServerSideProps(){
    const exhibit = await getExhibition()
    return{
        props: {
            exhibit,
        }
    }
}