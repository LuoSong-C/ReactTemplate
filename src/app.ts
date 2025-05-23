import { layoutConfig } from "../config/layoutConfig";
import type { RunTimeLayoutConfig } from '@umijs/max';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'OneLink-AIOT' };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    ...layoutConfig,
    actionsRender: () => initialState?.name ? `Hi, ${initialState?.name}` : 'Hi, Guest',
  };
};
