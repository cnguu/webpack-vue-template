import { merge } from 'webpack-merge';

import baseConfig from '@wpv/builds/base.config';

import type { Configuration } from 'webpack';

const devConfig: Configuration = merge(baseConfig, {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: '0.0.0.0',
    compress: true,
    open: false,
    hot: true,
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
      reconnect: true,
    },
  },
});

export default devConfig;
