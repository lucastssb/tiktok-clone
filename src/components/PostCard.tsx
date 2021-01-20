import { useRef, useState } from 'react';
import {
    Container,
    Header,
    PersonContainer,
    ButtonContainer,
    Avatar,
    Info,
    Author,
    Description,
    Song,
    Tag,
    Content,
    VideoContainer,
    Video,
    ActionsContainer,
    PlayerIcon,
    Actions,
    Action,
} from '../styles/components/postCard';
import Image from 'next/image';
import Button from '../styles/components/button';

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

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const videoRef = useRef(null);
    const [running, setRunning] = useState(false);

    const toggleAction = () => {
        if (videoRef?.current != null) {
            if (!running) videoRef.current.play();
            else videoRef.current.pause();

            setRunning(!running);
        }
    };
    return (
        <Container>
            <Header>
                <PersonContainer>
                    <Avatar src={post?.author?.avatar}/>
                    <Info>
                        <Author>
                            {post?.author?.username}
                            <span>{post?.author?.name}</span>
                        </Author>
                        <Description>
                            <span>{post?.description}</span>
                            {post?.tags.map((tag, index) => (
                                <Tag key={index}>{tag.title}</Tag>
                            ))}
                        </Description>
                    </Info>
                </PersonContainer>
                <ButtonContainer>
                    <Button fontSize={14} outlined >
                        Seguir
                    </Button>
                </ButtonContainer>
            </Header>
            <Content>
                <Song>
                    <img src='/images/songIcon.svg'></img>
                    <a>{post?.songName}</a>
                </Song>
                <VideoContainer>
                    <Video
                        ref={videoRef}
                        src={post?.videoUrl}
                        webkit-playsinline={true}
                        playsInline
                        loop={true}
                        preload='metadata'
                    />
                    <ActionsContainer onClick={toggleAction}>
                        <PlayerIcon
                            src={
                                running
                                    ? '/images/pauseIcon.svg'
                                    : '/images/playIcon.svg'
                            }
                        />
                    </ActionsContainer>
                </VideoContainer>
            </Content>
            <Actions>
                <Action>
                    <Image src='/images/heartIcon.svg' width='32px' height='32px'/>
                    <a>{post?.likes}</a>
                </Action>
                <Action>
                    <Image src='/images/bubbleIcon.svg' width='32px' height='32px'/>
                    <a>{post?.comments}</a>
                </Action>
                <Action>
                    <Image src='/images/arrowIcon.svg' width='32px' height='32px'/>
                    <a>{post?.replies}</a>
                </Action>
            </Actions>
        </Container>
    );
};

export default PostCard;
