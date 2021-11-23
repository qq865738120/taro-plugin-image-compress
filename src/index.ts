export default (ctx, options) => {
  // ctx.onBuildStart(async () => {
  //   console.log(ctx.helper.chalk.yellow("插件 "), "taro-plugin-init-app");
  //   console.log(ctx.helper.chalk.greenBright("开始 "), "初始化入口文件");
  //   const { homeRoute, compSuffix, subPkgs, mainPkgs } = options;
  //   /**
  //    * 需要过滤的文件夹
  //    */
  //   const filterDirs = [
  //     "assets",
  //     "constants",
  //     "enums",
  //     "css",
  //     "interceptors",
  //     "interface",
  //     "lib",
  //     "services",
  //     "styles",
  //     "utils",
  //   ];
  //   const cache = haveCache(
  //     ["./src"],
  //     (filepath, stats, filename) => {
  //       let result = true;
  //       if (stats === "file" && /\.png$|\.jpg$|\.jpeg$/.test(filename)) {
  //         result = false;
  //       }
  //       filterDirs.map((dir) => {
  //         if (filepath.includes(dir)) {
  //           result = false;
  //         }
  //       });
  //       return result;
  //     },
  //     { homeRoute, compSuffix, subPkgs, mainPkgs }
  //   );
  //   if (!cache.isCache) {
  //     // 扫描页面
  //     await Promise.all([getPages(ctx, options), getSubPackages(ctx, options)]).then(
  //       (res) => {
  //         initApp({
  //           pages: res[0],
  //           subPackages: res[1],
  //         });
  //       }
  //     );
  //     // 获取所有组件生成文件名
  //     getComponent(options);
  //     cache.finishedCache()
  //   } else {
  //     console.log(ctx.helper.chalk.blueBright("结束 "), "✅✨命中缓存（已为您节省宝贵的1秒钟）👏👏👏");
  //   }
  // });
};
