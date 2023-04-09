/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.build.sourcemap = false;
      config.build.minify = 'terser';
      config.build.terserOptions = {
        compress: {
          ecma: 2015,
          inline: false,
        },
      };
    }
    return config;
  }
  
  
  
  
  
  
  
};
export default config;
