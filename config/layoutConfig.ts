import favicon from '@/assets/favicon.ico'

interface LayoutConfigProps {
  logo: string;
  menu: {
    locale: boolean,
  },
  layout: 'mix' | 'top' | 'side';
  token: {
    header: {
      heightLayoutHeader: number;
    }
  };
  contentWidth: 'Fluid' | 'Fixed';
  fixedHeader: boolean;
  fixSiderbar: boolean;
  splitMenus: boolean;
  locale: 'zh-CN' | 'en-US' | 'zh-TW';
  pwa: boolean;
  title: string;
  collapsed: boolean;
  collapsedButtonRender: () => null,
}

export const layoutConfig: LayoutConfigProps = {
  logo: favicon,
  menu: {
    locale: false,
  },
  layout: 'mix',
  // 全局token配置
  token: {
    header: {
      heightLayoutHeader: 48,
    },
  },
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  pwa: false,
  // 当显示模式是mix时，开启此配置项会让顶部菜单和侧边菜单保持分离，侧边菜单只展示二级菜单
  splitMenus: false,
  locale: "zh-CN", // 国际化
  title: 'OneLink-AIOT',
  collapsed: false,
  collapsedButtonRender: () => null,
}