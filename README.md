## 同时绑定gitee和github两个仓库

### 步骤

- 1.gitee和github创建两个代码仓库
- 2.关联两个仓库

```
git remote add github（别名-通常是origin现在绑定的是两个仓库使用仓库做别名） git@github.com:xxxx/Test.git

git remote add gitee git@gitee.com:xxxx/Test.git
```

- 3.创建文件提交仓库

```
touch README.md
git add README.md
git commit -m "first commit"
git push -u github master
git push -u gitee master
```

如果要推送到GitHub，使用命令：`git push github master`

如果要推送到Gitee，使用命令：`git push gitee master`



### 如何撤销git add . 操作

1.例如：刚刚提交的代码中，不想把 a.txt提交上去，撤销 a.txt ，使用下面代码 

```bash
git rm --cached a.txt
```

