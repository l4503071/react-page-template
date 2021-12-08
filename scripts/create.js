/* eslint-disable no-unused-vars */
const prompts = require("prompts");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs-extra");

const root = path.resolve(__dirname, "../");
const templateMap = {
  1: "page",
  2: "component",
};

function editFile(path, camelName, name) {
  const str = fs.readFileSync(path, {
    encoding: "utf8",
  });
  const [first, ...last] = camelName;
  const content = str.replaceAll("Xxx", first.toUpperCase() + last.join("")).replaceAll("xxx", name);
  fs.writeFileSync(path, content, {
    encoding: "utf8",
  });
}

function transCamel(_str, symbol) {
  const str = _str[0].toLowerCase() + _str.substr(1);
  return str.replace(/([A-Z])/g, $1 => `${symbol}${$1.toLowerCase()}`);
}

/**
 * 根据 type 创建模版
 * @param {*} type 1: 页面，2: 组件
 */
async function craeteTemplate(type, camelName) {
  const name = transCamel(camelName, "-");
  const templatePath = path.resolve(root, "template", templateMap[type]);
  const destPath = path.resolve(root, "src", templateMap[type], name.trim());
  if (!fs.existsSync(templatePath)) {
    console.error(chalk.red(`模版路径不存在: ${templatePath}`));
    process.exit(1);
  }
  if (fs.existsSync(destPath)) {
    console.error(chalk.red(`路径已存在: ${templatePath}`));
    process.exit(1);
  }
  fs.copySync(templatePath, destPath);
  // 修改文件
  if (type === 1) {
    // page
    editFile(path.resolve(destPath, "index.js"), camelName, name);
    editFile(path.resolve(destPath, "index.scss"), camelName, name);
    editFile(path.resolve(destPath, "meta", "reducer.js"), camelName, name);
  } else if (type === 2) {
    // component
    editFile(path.resolve(destPath, "index.js"), camelName, name);
    editFile(path.resolve(destPath, "index.scss"), camelName, name);
  }
  return destPath;
}

(async () => {
  const questions = [
    {
      type: "select",
      name: "type",
      message: "请选择创建模板类型?",
      choices: [
        {
          title: "页面(page)",
          value: 1,
        },
        {
          title: "组件(component)",
          value: 2,
        }
      ],
    },
    {
      type: "text",
      name: "name",
      message: "请输入名称(如 home, homePath)",
      validate: (name) => {
        if (!name) {
          return "请输入正确名称";
        }
        if (name.includes(" ")) {
          return "名称中不能包含空格字符";
        }
        if (/[^a-zA-Z0-9]+/.test(name)) {
          return "名称中不能包含特殊字符";
        }
        return true;
      },
    }
  ];
  const { type, name } = await prompts(questions);
  console.log(chalk.green("正在努力创建中..."));
  const dir = await craeteTemplate(type, name);
  console.log(chalk.green("恭喜，已经完成..."));
  console.log(chalk.green("输出目录: " + dir));
})();
