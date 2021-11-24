const isNeedCompress = (filePath: string, hash: string, cache: any) => {
  return cache[filePath] !== hash
};

export default isNeedCompress;
