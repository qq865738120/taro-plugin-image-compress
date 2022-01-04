import compress from "./compress.js";

export default (ctx, options) => {
  console.log("options", options);
  const { dirPath } = options;
  const { chalk } = ctx.helper
  ctx.onBuildStart(() => {
    console.log(chalk.greenBright("插件 "), "taro-plugin-image-compress");
    compress(ctx, dirPath)
  });
};
