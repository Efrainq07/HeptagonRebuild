import React from 'react'
import { Box, Image, Link, Button, HStack ,StackDivider} from '@chakra-ui/react';
import { Layout } from 'antd';
import './App.css'

const { Content, Sider, Footer, Header } = Layout;

const App = () => {
    return (
        <Layout>
            <Layout>
                <Header id='hepHeader'>
                    <Image boxSize='100px' objectFit='cover' src='./heptagon.png' id='hepLogo'/>
                    <HStack divider={<StackDivider borderColor='gray.200' />} h='25px' p={4} id='hepLinkContainer'>
                        <Link className='hepHeaderLink'>
                            Home
                        </Link>
                        <Link className='hepHeaderLink'>
                            Explore
                        </Link>
                        <Link className='hepHeaderLink'>
                            Contact
                        </Link>
                    </HStack>
                    <Button colorScheme='purple' id='hepWalletButton'>Connect Wallet</Button>
                </Header>
            </Layout>
        </Layout>
    )
}

export default App;
