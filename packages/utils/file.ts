/**
 * @description 从文件路径中获取文件名和文件目录
 * @param {string} filepath 文件路径
 * e.g. 'ply/1234/5/test.ply'
 *        => { fileDir:'ply/1234/5', filename: 'test.ply' }
 */
export const getFileInfoFromPath = (filepath: string) => {
  const [, fileDir, filename] = filepath.split(/(.*)[\/|\\]/);

  return {
    fileDir,
    filename,
  };
};
