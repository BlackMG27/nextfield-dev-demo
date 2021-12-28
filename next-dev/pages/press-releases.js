import React, {Fragment} from "react";
import Head from 'next/head';
import {Box, Grid, Container, GridItem, Text} from '@chakra-ui/react'
import { getPressReleases } from "../src/lib/api";

export default function PressRelease({press}){
    return(
        <Fragment>

        </Fragment>
    )
}

export async function getServerSideProps(){
    const press = await getPressReleases()
    return{
        props: {
            press,
        }
    }
}

