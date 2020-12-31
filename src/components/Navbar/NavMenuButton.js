import React from 'react'
import styled from 'styled-components'

import Lightsaber from './Lightsaber'

const Layout = styled.div`
    position: relative;
    width: 1.5rem;
    height: 2.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;    
`

const TopMenuLine = styled(Lightsaber)`
`

const MiddleMenuLine = styled(Lightsaber)`
`

const BottomMenuLine = styled(Lightsaber)`
`

const NavMenuButton2 = ({ active }) => {


    return (
        <Layout>
            <TopMenuLine active={active} color={`green`} />
            <MiddleMenuLine active={active} color={`blue`} />
            <BottomMenuLine active={active} color={`red`} />
        </Layout>
    )
}

export default NavMenuButton2
