import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { List, Avatar } from 'antd';
import { useAppDispatch } from '../../redux';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Content from '../../components/Content';
import { INDEX_URL } from '../../constants/urls';
import type { RootState } from '../../redux/interfaces';
import type { IUserProfileData } from '../../redux/users/actions/interfaces';
import { getUserProfileByIdSelector } from '../../redux/users/selectors';
import { getUserProfileById } from '../../redux/users/actions';
import styles from './styles.module.scss';

function UserProfile(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const userProfile = useSelector<RootState, IUserProfileData>(getUserProfileByIdSelector(userId));
  const onBack = () => navigate(INDEX_URL, { replace: true });

  useEffect(() => {
    userId && dispatch(getUserProfileById(userId));
  }, [dispatch, userId])

  return (
    <Container className={styles.container}>
      <Header title="Person" onBack={onBack} />
      <Content>
        <List
          className={styles.userProfile}
          itemLayout="horizontal"
          dataSource={[
            {
              key: userId,
              ...userProfile
            },
          ]}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar size="large" src={item.avatar_url} />}
                title={item.name}
                description={item.location}
              />
            </List.Item>
          )}
        />
      </Content>
    </Container>
  );
}

export default UserProfile;
