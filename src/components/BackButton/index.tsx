import { Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const { Text } = Typography;

type DivProps = JSX.IntrinsicElements['div']
interface IBackButtonProps extends DivProps {}

function BackButtonComp({ onClick }: IBackButtonProps): JSX.Element {
  return (
    <div className={styles.backButton} onClick={onClick}>
      <span className={styles.icon}>
        <LeftOutlined />
      </span>
      <Text>Back</Text>
    </div>
  )
}

export default BackButtonComp