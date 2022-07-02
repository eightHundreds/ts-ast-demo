import * as ts from "typescript";
// 从js文件中生成d.ts, 需要 ts 3.7

function compile(fileNames: string[], options: ts.CompilerOptions): void {
  // Create a Program with an in-memory emit
  const createdFiles = {}

  // 自定义文件系统
  const host = ts.createCompilerHost(options);
  // 将编译结果放到createdFiles中
  host.writeFile = (fileName: string, contents: string) => createdFiles[fileName] = contents
  
  // Prepare and emit the d.ts files
  const program = ts.createProgram(fileNames, options, host);
  program.emit();

  // Loop through all the input files
  fileNames.forEach(file => {
    console.log("### JavaScript\n")
    console.log(host.readFile(file))

    console.log("### Type Definition\n")
    const dts = file.replace(".js", ".d.ts")
    console.log(createdFiles[dts])
  })
}

// Run the compiler
compile(process.argv.slice(2), {
  allowJs: true,
  declaration: true, 
  emitDeclarationOnly: true, // 仅生成d.ts
});