import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'

import TerrainBackground from '../components/Backgrounds/TerrainBackground/TerrainBackground'

const Layout = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`

const MessageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Message = styled.h2`
`

const PageNotFound = () => {

    useEffect(() => {
        setTimeout(() => navigate(
            "/",
            {
                replace: true
            }
        ), 5000)
    })

    return (
        <Layout>
            <TerrainBackground />
            <MessageContainer>
                <Message>Sorry, your page isn't found.
                </Message>
                <Message>Redirecting to home page...</Message>
            </MessageContainer>
        </Layout>
    )
}

export default PageNotFound
