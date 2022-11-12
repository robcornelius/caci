import { Drawer } from "antd";
import styled from "styled-components";

const StarshipDrawer = styled(Drawer)`
  & .ant-drawer-content {
    background: rgba(0, 0, 0, 0.75);
    color: rgb(255, 233, 31);
  }
  & td {
    color: rgb(255, 233, 31);
  }
  & .ant-drawer-title {
    color: rgb(255, 233, 31);
  }
  & .ant-drawer-close {
    color: rgb(255, 233, 31);
  }
  & .ant-drawer-header {
    border-bottom: 2px solidrgb(255, 233, 31) !important;
  }
`;
export default StarshipDrawer;
