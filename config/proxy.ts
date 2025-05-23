/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
interface IProxyTarget {
  target: string;
  changeOrigin: boolean;
}

interface IProxy {
  [key: string]: { [key: string]: IProxyTarget };
}

export const proxy: IProxy = {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/api/': {
      // 要代理的地址
      target: 'https://preview.pro.ant.design',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
    },
    '/wireless/': {
      // target: 'https://www.youcats.cn',
      target: 'http://10.19.102.53:8079',
      // target: 'http://localhost:8032',
      changeOrigin: true,
    },
  },
  test: {},
  pre: {},
  prod: {},
};
