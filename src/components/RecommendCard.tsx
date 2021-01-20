import { Container, Avatar, Info } from '../styles/components/recommendedCard';

interface RecommendItem {
    title: string;
    views: string;
    avatar: string;
}

interface RecommendCardProps {
    recommendItem: RecommendItem;
}

const RecommendCard: React.FC<RecommendCardProps> = ({recommendItem}) => {
    return (
        <Container>
            <Avatar src={recommendItem.avatar}></Avatar>
            <Info>
                <a>{recommendItem.title}</a>
                <span>{recommendItem.views}</span>
            </Info>
        </Container>
    );
};

export default RecommendCard;
