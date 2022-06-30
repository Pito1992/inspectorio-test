import React from 'react';
import classNames from 'classnames';
import { Layout, LayoutProps } from 'antd';

import styles from './styles.module.scss';

interface IContainerProps extends LayoutProps {}

function ContainerComp({ className, children, ...restProps }: IContainerProps): JSX.Element {
  return (
    <Layout className={classNames(styles.container, className)} {...restProps}>
      {children}
    </Layout>
  );
}

export default ContainerComp;
