# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
$ yarn build
构建产物默认生成到 ./dist 下，然后通过 tree 命令查看，

tree ./dist

./dist
├── index.html
├── umi.css
└── umi.js

发布之前，可以通过 serve 做本地验证，

$ yarn global add serve
$ serve ./dist
