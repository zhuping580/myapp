import { Link } from 'umi';
import styles from './index.less';

export default function IndexPage(props) {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h1>{ props.children }</h1>
      <Link to="/user">User Page</Link>
    </div>
  );
}
