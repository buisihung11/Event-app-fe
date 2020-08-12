import styles from './index.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';

const { Header, Content, Footer } = Layout;

function BasicLayout(props) {
  return props.children;
}

export default BasicLayout;
