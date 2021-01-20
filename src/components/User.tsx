import { Container, Avatar, Info } from '../styles/components/user';

interface User {
    name: string;
    username: string;
    avatar: string;
}

interface UserProps {
   user: User;
}

const User: React.FC<UserProps> = ({user}) => {
  return (
      <Container>
          <Avatar src={user.avatar}/>
          <Info>
              <a>{user.name}</a>
              <span>{user.username}</span>
          </Info>
      </Container>
  );
}

export default User;
