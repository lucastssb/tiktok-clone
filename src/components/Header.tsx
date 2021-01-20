import {
    Container,
    Content,
    LogoContainer,
    LogoIcon,
    Logo,
    OptionsContainer,
    Icon,
    Avatar,
} from '../styles/components/header';

const PageHeader: React.FC = () => {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon
                        src="/images/logoIcon.svg"
                        alt="logo"
                        width="28"
                        height="28"
                    />
                    <Logo
                        src="/images/logo.svg"
                        alt="logo"
                        width="97"
                        height="28"
                    />
                </LogoContainer>
                <OptionsContainer>
                    <Icon
                        src="/images/uploadIcon.svg"
                        alt="upload"
                        width="37"
                        height="37"
                    />
                    <Avatar>
                        <img
                            src="https://avatars0.githubusercontent.com/u/37252638"
                            alt="avatar"
                        />
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    );
};

export default PageHeader;
