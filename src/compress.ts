import { doCache, getCache } from "./cache.js";
import { getFileHash, getBufferHash } from "./hash.js";
import isNeedCompress from "./isNeedCompress.js";
const imagemin = require("imagemin");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const imageminWebp = require("imagemin-webp");

const fsPath = require("fs-path");

const compress = (ctx, dirPath?: string) => {
  const { chalk } = ctx.helper;
  const cache = getCache();
  const pluginObj = {
    gif: imageminGifsicle(),
    png: imageminOptipng(),
    jpg: imageminJpegtran(),
    jpeg: imageminJpegtran(),
    svg: imageminSvgo(),
    webp: imageminWebp(),
  };
  let count = 0;
  let compressCount = 0;

  const imageFiles: string[] = fsPath.findSync(
    dirPath || "./src",
    (_filepath, stats, filename) => {
      if (
        stats === "file" &&
        /\.png$|\.jpg$|\.jpeg$|\.svg$|\.gif$/.test(filename)
      ) {
        return true;
      }
      if (stats === "directory") {
        return true;
      }
      return false;
    }
  ).files;

  imageFiles.map((path) => {
    getFileHash(path, (hash) => {
      if (isNeedCompress(path, hash, cache)) {
        let _path = path
        if (process.platform === 'win32') {
          _path = _path.split('\\').join('/')
        }
        const destinationArr = _path.split("/");
        const fileName = destinationArr.pop() || "";
        imagemin([_path], {
          destination: destinationArr.join("/"),
          plugins: [pluginObj[fileName.split(".").pop() || "png"]],
        }).then((buffer) => {
          count++
          if (!buffer || buffer.length === 0) {
            return
          }
          const newHash = getBufferHash(buffer[0].data);
          // 替换新的hash值
          cache[buffer[0].sourcePath] = newHash;
          compressCount++;
          console.log(chalk.yellowBright("压缩 "), `✅${path}`);
        }).catch(err => {
          count++
          console.error('压缩出错', err);
        });
      } else {
        count++;
      }
    });
  });

  const timerId = setInterval(() => {
    if (count >= imageFiles.length - 1) {
      doCache(cache);
      clearInterval(timerId);
      console.log(
        chalk.blueBright("结束 "),
        `✅taro-plugin-image-compress已为您压缩${compressCount}张图片！👏👏👏`
      );
    }
  }, 100);
};
// compress();
export default compress;
