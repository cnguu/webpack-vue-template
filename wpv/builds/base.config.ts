import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import baseConfigDef from '@wpv/builds/base.config';
import { pathResolve, getHtmlWebpackPluginOptions } from '@wpv/builds/util';
import { getEnvConfig } from '@wpv/builds/env';

import type { Configuration } from 'webpack';

// TODO 增加WPV_BASE_PATH
console.log(
  getEnvConfig({
    path: pathResolve(`./envs/.env.${process.env.ENV_MODE}`),
  }),
);
process.exit();
const baseConfig: Configuration = merge(baseConfigDef, {
  entry: pathResolve('./src/main.ts'),
  output: {
    path: pathResolve('./builds/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...getHtmlWebpackPluginOptions(),
      template: pathResolve('./index.html'),
    }),
  ],
});

export default baseConfig;
