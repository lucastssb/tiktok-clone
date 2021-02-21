import {
    Container,
    IconsContainer,
    Icon,
    BoxContainer,
    BoxHeader,
    ButtonContainer,
    Item,
    ItemContainer,
    ArrowIcon,
    DownloadImage,
} from '../styles/components/suggestions';
import User from './User';
import Button from '../styles/components/button';
import RecommendCard from './RecommendCard';

const people = [
    {
        name: 'Neymar Jr',
        username: '@neymarjr',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
    },
    {
        name: 'Felipe Neto',
        username: '@felipeneto',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
    },
    {
        name: 'Anitta',
        username: '@anitta',
        avatar: 'https://p77-sign-sg.tiktokcdn.com/tos-maliva-avt-0068/7b997f0208ba7f5c05d11625be7c2636~c5_720x720.jpeg?x-expires=1614016800&x-signature=kRItpnqfk02M0UCdlW3Hxt%2B6o%2Fs%3D',
    },
    {
        name: 'Isis Valverde',
        username: '@isisvalverde',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
    },
    {
        name: 'Neymar Jr',
        username: '@neymarjr',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
    },
    {
        name: 'Felipe Neto',
        username: '@felipeneto',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
    },
    {
        name: 'Anitta',
        username: '@anitta',
        avatar:
            'https://p77-sign-sg.tiktokcdn.com/tos-maliva-avt-0068/510361cebabfb678243c331810985e81~c5_720x720.jpeg?x-expires=1611180000&x-signature=GcT%2FFLiDcZvad7z79OjbXuX7SFg%3D',
    },
    {
        name: 'Isis Valverde',
        username: '@isisvalverde',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
    },
    {
        name: 'Neymar Jr',
        username: '@neymarjr',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
    },
    {
        name: 'Felipe Neto',
        username: '@felipeneto',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
    },
    {
        name: 'Anitta',
        username: '@anitta',
        avatar:
            'https://p77-sign-sg.tiktokcdn.com/tos-maliva-avt-0068/510361cebabfb678243c331810985e81~c5_720x720.jpeg?x-expires=1611180000&x-signature=GcT%2FFLiDcZvad7z79OjbXuX7SFg%3D',
    },
    {
        name: 'Isis Valverde',
        username: '@isisvalverde',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
    },
    {
        name: 'Neymar Jr',
        username: '@neymarjr',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
    },
    {
        name: 'Felipe Neto',
        username: '@felipeneto',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
    },
    {
        name: 'Anitta',
        username: '@anitta',
        avatar:
            'https://p77-sign-sg.tiktokcdn.com/tos-maliva-avt-0068/510361cebabfb678243c331810985e81~c5_720x720.jpeg?x-expires=1611180000&x-signature=GcT%2FFLiDcZvad7z79OjbXuX7SFg%3D',
    },
    {
        name: 'Isis Valverde',
        username: '@isisvalverde',
        avatar:
            'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
    },
];

const items = [
    {
        title: 'Woah',
        views: '12.7M views',
        avatar:
            'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg',
    },
    {
        title: 'Dance Monkey',
        views: '7.4M views',
        avatar:
            'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg',
    },
    {
        title: '#youhaveto',
        views: '2.5B views',
        avatar:
            'https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d',
    },
    {
        title: 'Can we Kiss Forever?',
        views: '8.7M views',
        avatar:
            'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg',
    },
    {
        title: 'Woah',
        views: '12.7M views',
        avatar:
            'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg',
    },
    {
        title: 'Dance Monkey',
        views: '7.4M views',
        avatar:
            'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg',
    },
    {
        title: '#youhaveto',
        views: '2.5B views',
        avatar:
            'https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d',
    },
    {
        title: 'Can we Kiss Forever?',
        views: '8.7M views',
        avatar:
            'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg',
    },
];

const Suggestions: React.FC = () => {
    return (
        <Container>
            <IconsContainer>
                <Icon src="/images/facebookIcon.svg"/>
                <Icon src="/images/pinterestIcon.svg"/>
                <Icon src="/images/twitterIcon.svg"/>
            </IconsContainer>
            <BoxContainer>
                <BoxHeader>
                    <span>Contas sugeridas</span>
                </BoxHeader>
                <ItemContainer>
                    {people.map((person, index) => (
                        <Item key={index} >
                            <User user={person}/>
                            <ButtonContainer>
                                <Button fontSize={14} outlined>
                                    Seguir
                                </Button>
                            </ButtonContainer>
                        </Item>
                    ))}
                </ItemContainer>
            </BoxContainer>
            <BoxContainer>
                <BoxHeader>
                    <span>Descobrir</span>
                </BoxHeader>
                <ItemContainer>
                    {items.map((item, index) => (
                        <Item key={index}>
                            <RecommendCard
                                recommendItem={item}
                            />
                            <ArrowIcon/>
                        </Item>
                    ))}
                </ItemContainer>
            </BoxContainer>
            <DownloadImage src="/images/appstore.png"/>
            <DownloadImage src="/images/playstore.png"/>
            <DownloadImage src="/images/amazon.png"/>
        </Container>
    );
};

export default Suggestions;
