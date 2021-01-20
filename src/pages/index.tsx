import { GetServerSideProps } from 'next';

import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';

interface Tag {
    title: string;
}

interface Author {
    id: string;
    avatar: string;
    name: string;
    username: string;
}

interface Post {
    id: string;
    author: Author;
    description: string;
    tags: Tag[];
    songName: string;
    videoUrl: string;
    likes: number;
    comments: number;
    replies: number;
}

interface HomeProps {
    posts: Post[];
}

const Home: React.FC<HomeProps> = ({posts}) => {
    return (
        <Layout>
            <Feed posts={posts} />
            <Suggestions></Suggestions>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const data = [
        {
            id: 1,
            author: {
                id: 1,
                avatar:
                    'https://avatars0.githubusercontent.com/u/37252638',
                name: 'Lucas Barbosa',
                username: 'lucasBarbosa',
            },
            description: '',
            tags: [{ title: '#youtube' }, { title: '#endregionclone' }],
            songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
            videoUrl:
                'https://v19.tiktokcdn.com/12eccb8ba078acd68c14f5bb24ab13ce/6007a171/video/tos/useast2a/tos-useast2a-pve-0068/daa655fd4f8d4c9892ac5ea906adb83c/?a=1233&br=3234&bt=1617&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101192120010101902180712C1DD8F6&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajxnbzo6OWZxeTMzZjczM0ApZ2U2Omk8MzxoNzw0NWllN2diZm4wNjQtNXNfLS01MTZzc2MvYTI0XmAuYzJiNi5eYmA6Yw%3D%3D&vl=&vr',
            likes: 650,
            comments: 10,
            replies: 50,
        },
        {
            id: 2,
            author: {
                id: 1,
                avatar:
                    'https://avatars0.githubusercontent.com/u/37252638',
                name: 'Lucas Barbosa',
                username: 'lucasBarbosa',
            },
            description: 'Vídeo teste para clone de interface',
            tags: [{ title: '#youtube' }, { title: '#clone' }],
            songName: 'Tampa Curhat Beat - TampaCurhat',
            videoUrl:
                'https://v19.tiktokcdn.com/861ad521b0b38858dc73aa5092a64782/6007a16f/video/tos/alisg/tos-alisg-pve-0037c001/62d523eb21a048169fe498ee7a065396/?a=1233&br=5238&bt=2619&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101192120010101902180712C1DD8F6&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M29yeDN3OG5ueDMzMzczM0ApaGVlNzw0ZmQ4Nzc7aGloZGc1X2ZeNnBpNV9fLS1iMTRzczQ1Mi9gXzI0Y2NiL2MtLy86Yw%3D%3D&vl=&vr',
            likes: 650,
            comments: 10,
            replies: 50,
        },
    ];

    return {
        props: {
            posts: data,
        }, // will be passed to the page component as props
    };
};

export default Home;
