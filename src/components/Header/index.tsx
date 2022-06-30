import React from 'react';
import classNames from 'classnames';
import { Typography, Col, Row, Layout, LayoutProps } from 'antd';
import BackButton from '../../components/BackButton';

import styles from './styles.module.scss';

const { Title } = Typography;
const { Header } = Layout;

interface IHeaderProps extends LayoutProps {
  onBack?: () => void,
  title: string,
}

function HeaderComp({
  onBack,
  title,
  className,
  ...restProps
}: IHeaderProps): JSX.Element {
  return (
    <Header className={classNames(styles.container, className)} {...restProps}>
      <Row justify="space-between" align="middle" style={{ height: '100%' }}>
        <Col span={4}>{typeof onBack === 'function' ? (
          <BackButton onClick={onBack} />
        ) : null}</Col>
        <Col span={16} pull={4}>
          <Title className={styles.title} level={4}>{title}</Title>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderComp