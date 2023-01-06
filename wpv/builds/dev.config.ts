import { merge } from 'webpack-merge';

import devConfigDef from '@wpv/builds/dev.config';
import { pathResolve } from '@wpv/builds//util';

import baseConfig from '@wpv/core/builds/base.config';

import type { Configuration } from 'webpack';

const devConfig: Configuration = merge(devConfigDef, baseConfig, {
  devServer: {
    port: '7800',
    proxy: {},
    static: {
      directory: pathResolve('./public'),
    },
  },
});

export default devConfig;
