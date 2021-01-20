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

const Home: React.FC<HomeProps> = ({ posts }) => {
    return (
        <Layout>
            <Feed posts={posts} />
            <Suggestions/>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    async function dt(): Promise<Post[]> {
        const response = await fetch('http://localhost:3000/api/posts');
        return response.json();
    }

    return {
        props: {
            posts: await dt(),
        },
    };
};

export default Home;
