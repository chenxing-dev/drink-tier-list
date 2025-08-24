# 饮料 Tier List - 待办事项

## 资源准备
- [x] 收集所有饮料的高质量图片
- [x] 设计并添加网站品牌LOGO和favicon
- [x] ![网站截图](screenshot.png)
- [x] 准备更多饮料测评数据（至少30条）

## 性能优化
- [x] 对饮料图片进行压缩（WebP格式）
- [x] 代码分割优化

## 内容运营
- [ ] 每周更新3-5条新饮料测评
- [x] 在社交媒体分享


# 对饮料图片进行压缩（WebP格式）

## 单图转换（推荐质量75-85）
cwebp -q 80 input.jpg -o output.webp

## 批量转换（递归文件夹）
find ./public/{drinks,labels}/ -name "*.png" -exec sh -c 'cwebp -q 60 "$0" -o "${0%.*}.webp"' {} \;
