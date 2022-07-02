# 示例

- mini-compiler, 通过ts.Promise模拟调用tsc的过程
- simple-transform, 最简易的ts转js的代码,不需要文件系统, 入参是string.
- dts-from-js, 将js生成d.ts, 包含了compilerHost的用法
- re-print, 打印一段ts代码的指定部分, 介绍了ts.createPrinter的用法
- traversing, 广度优先遍历节点做lint操作, ts.forEachChild
- watcher,增量编译

# 参考资料

官方资料极少, 示例应该是最好的学习资料

- https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API

