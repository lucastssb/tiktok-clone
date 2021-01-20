import Header from './Header';
import Sidebar from './Sidebar';

import {
    Container,
    SidebarContainer,
    ContentContainer,
} from '../styles/components/layout';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header></Header>
            <Container>
                <SidebarContainer>
                    <Sidebar></Sidebar>
                </SidebarContainer>
                <ContentContainer>{children}</ContentContainer>
            </Container>
        </>
    );
};

export default Layout;
