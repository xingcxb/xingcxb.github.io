#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果手运行该脚本，则执行if里的，如果是GitHub自动执行该脚本，则是else里的
if [ -z "$GITHUB_TOKEN" ]; then
 msg='deploy'
 githubUrl=git@github.com:Kele-Bingtang/notes-blog.git  # 替换自己的 GitHub 仓库地址，SSH格式
else
 msg='来自github actions的自动部署'
 # 替换自己的 GitHub 仓库地址，更改的是 @后面的地址 以及 把Kele-Bingtang 改为自己用户名
 githubUrl=https://xingcxb:${GITHUB_TOKEN}@github.com:xingcxb/symbol_blog.git
 git config --global user.name "xingcxb"   # 修改为自己的 GitHub 用户名
 git config --global user.email "xingcxb@hotmail.com"  # 修改为自己的 GitHub 邮箱，注册时绑定的邮箱
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
