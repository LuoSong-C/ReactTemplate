import { defineConfig } from '@umijs/max';
import routes from './routes';
import { proxy } from './proxy';

const { REACT_APP_ENV } = process.env;
const packageName = '/onelinkAiot';

export default defineConfig({
  antd: {},
  access: {},
  dva: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  // 代码拆分
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  favicons: [process.env.NODE_ENV === 'production' ? `${packageName}/favicon.ico` : '/favicon.ico'],
  routes,
  npmClient: 'npm',
  proxy: proxy[REACT_APP_ENV || 'dev'],
  publicPath: process.env.NODE_ENV === 'production' ? `${packageName}/` : '/',
  base: `${packageName}/`,
  outputPath: `.${packageName}`,
  // devtool: process.env.NODE_ENV === 'production' ? false : 'eval',
});

