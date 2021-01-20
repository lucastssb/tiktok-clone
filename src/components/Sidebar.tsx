import React from 'react';
import Image from 'next/image';
import {
    Container,
    MenuItem,
    Following,
    FollowingHeader,
    InfoContainer,
    Links,

} from '../styles/components/sidebar';

import User from './User';

const Sidebar: React.FC = () => {
    return (
        <Container>
            <MenuItem active>
                <Image src='/images/homeIcon.svg' alt='Home' width='40px' height='40px'/>
                <span>Para você</span>
            </MenuItem>
            <MenuItem >
                <Image src='/images/peopleIcon.svg' alt='People' width='40px' height='40px'/>
                <span>Seguindo</span>
            </MenuItem>
            <Following>
                <FollowingHeader>Suas principais contas</FollowingHeader>
                <User user={{
                    name: 'Will Smith',
                    username: 'willsmith',
                    avatar: 'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1646315618666501~c5_100x100.jpeg'
                }} />
            </Following>
            <InfoContainer>
                <Links margin>
                    <a>Início</a>
                    <a>Sobre</a>
                    <a>Sala de imprensa</a>
                    <a>Carreira</a>
                    <a>ByteDance</a>
                </Links>
                <Links>
                    <a>Ajuda</a>
                    <a>Segurança</a>
                </Links>
                <Links>
                    <a>Diretrizes da comunidade</a>
                    <a>Termos</a>
                </Links>
                <Links margin>
                    <a>Privacidade</a>
                </Links>
                <Links margin>
                    <a>© 2020 TikTok</a>
                </Links>
            </InfoContainer>
        </Container>
    );
};

export default Sidebar;
