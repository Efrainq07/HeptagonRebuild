import React from 'react'
import { Image, Link, Button, HStack ,StackDivider} from '@chakra-ui/react';
import { Layout } from 'antd';
import './Base.css'
import Player from '../components/AudioPlayer'

const { Content, Sider, Footer, Header } = Layout;

const Base = ({content}) => {
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
                    <Button colorScheme='purple' id='hepWalletButton'>Connect Wallet</Button>
                    </HStack>
                </Header>
                <Content>
                    {content}
                </Content>
            </Layout>
            <Footer id="hepMusicPlayer">
                <Player content={[{title:"asi",audio:"https://ipfs.moralis.io:2053/ipfs/QmaN3pSa4yE16XeJCnFp6YfaenxbdF5wbxXictwJesHf92",publicationId:"xd"}]}/>
            </Footer>
        </Layout>
    )
}

export default Base;
