# taro-plugin-image-compress
> 一款自动化的图片无损压缩插件，自动压缩项目中png、jpg/jpeg、gif、svg、webp格式的图片。
---------

## 为什么使用
1. 自动化处理，方便集成到构建流程中。
2. 缓存机制，智能识别图片文件是否需要压缩，大大提升效率。
3. 无损压缩，不影响图片质量。

## 如何使用
### 安装
```shell
# 安装
npm install taro-plugin-image-compress
```

### 配置
```js
// taro配置文件中增加该插件配置
plugins: [
  ['taro-plugin-image-compress']
]

// 你还可以指定文件夹，默认从src目录下检索图片文件
plugins: [
  ['taro-plugin-image-compress', {
    dirPath: './src'
  }]
]
```
