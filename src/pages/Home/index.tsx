import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import { USER_PROFILE_URL } from '../../constants/urls';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Content from '../../components/Content';
import { TOP_FIVE_USERS } from '../../constants';

import styles from './styles.module.scss';

const { Title, Paragraph } = Typography;

function Home(): JSX.Element {
  const navigate = useNavigate();

  const handleClick = (user: string) => () => navigate(`${USER_PROFILE_URL}/${user}`, { replace: true })

  return (
    <Container className={styles.container}>
      <Header title="Home" />
      <Content>
        <Title level={3}>Top 5 GitHub Users</Title>
        <Paragraph>
          Tap the username to see more information
        </Paragraph>
        <div className={styles.userList}>
          {TOP_FIVE_USERS.map((user: string): JSX.Element => (
            <Button key={user} size="large" type="primary" onClick={handleClick(user)}>
              {user}
            </Button>
          ))}
        </div>
      </Content>
    </Container>
  );
}

export default Home;
