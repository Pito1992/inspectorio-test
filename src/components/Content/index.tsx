import React from 'react';
import classNames from 'classnames';
import { Layout, LayoutProps } from 'antd';

import styles from './styles.module.scss';

const { Content } = Layout;

interface IContentProps extends LayoutProps {}

function ContentComp({ className, children, ...restProps }: IContentProps): JSX.Element {
  return (
    <Content className={classNames(styles.container, className)} {...restProps}>
      {children}
    </Content>
  );
}

export default ContentComp;
