import { Container } from '../styles/components/feed';
import PostCard from './PostCard';

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

interface FeedProps {
    posts: Post[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
    return (
        <Container>
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </Container>
    );
};

export default Feed;
