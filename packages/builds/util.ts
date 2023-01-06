import nodePath from 'node:path';

/**
 * @description 同 node path.resolve
 */
export const pathResolve = (path = '.') => {
  return nodePath.resolve(process.cwd(), path);
};

/**
 * @description 获取 html-webpack-plugin 的 options
 */
export const getHtmlWebpackPluginOptions = () => {
  return {
    filename: 'index.html',
    prod: true,
    hash: true,
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      html5: true,
      minifyCSS: true,
      removeComments: true,
      removeEmptyAttributes: true,
    },
  };
};
