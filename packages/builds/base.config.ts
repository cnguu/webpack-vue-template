import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import 'webpack-dev-server';

import { pathResolve } from '@wpv/builds/util';
import { isProdMode } from '@wpv/builds/env';

import type { Configuration } from 'webpack';

const stylesHandler = isProdMode() ? MiniCssExtractPlugin.loader : 'style-loader';

const baseConfig: Configuration = {
  mode: process.env.NODE_ENV as 'none' | 'development' | 'production',
  output: {
    clean: true,
  },
  resolve: {
    alias: {
      '@@': pathResolve('../'),
    },
    modules: ['node_modules', '*'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.scss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

export default baseConfig;
