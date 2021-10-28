/* eslint-disable no-undef */
const prompts = require("prompts");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs-extra");

const root = path.resolve(__dirname, "../");
const templateMap = {
  1: "page",
  2: "component",
};

function editFile(path, name) {
  const str = fs.readFileSync(path, {
    encoding: "utf8",
  });
  const [first, ...last] = name;
  const content = str.replaceAll("Xxx", first.toUpperCase() + last.join("")).replaceAll("xxx", name);
  fs.writeFileSync(path, content, {
    encoding: "utf8",
  });
}

/**
 * 根据 type 创建模版
 * @param {*} type 1: 页面，2: 组件
 */
async function craeteTemplate(type, name) {
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
    editFile(path.resolve(destPath, "index.js"), name);
    editFile(path.resolve(destPath, "index.scss"), name);
    editFile(path.resolve(destPath, "meta", "xxxReducer.js"), name);
    fs.renameSync(path.resolve(destPath, "meta", "xxxReducer.js"), path.resolve(destPath, "meta", `${name}Reducer.js`));
  } else if (type === 2) {
    // component
    editFile(path.resolve(destPath, "index.js"), name);
    editFile(path.resolve(destPath, "index.scss"), name);
  }
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
      message: "请输入名称",
      validate: (name) => {
        if (!name) {
          return "请输入正确名称";
        }
        if (name.includes(" ")) {
          return "名称中不能包含空格字符";
        }
        return true;
      },
    }
  ];
  const { type, name } = await prompts(questions);
  console.log(chalk.green("正在努力创建中..."));
  await craeteTemplate(type, name);
  console.log(chalk.green("恭喜，已经完成..."));
})();
