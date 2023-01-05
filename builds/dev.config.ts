import webpack from 'webpack';
import { merge } from 'webpack-merge';

import baseConfig from './base.config';

const devConfig: webpack.Configuration = merge(baseConfig, {
  devServer: {
    open: false,
    hot: true,
    host: '0.0.0.0',
    port: '7800',
  },
});

export default devConfig;
