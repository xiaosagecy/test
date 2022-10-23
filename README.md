## 同时绑定gitee和github两个仓库

### 步骤
- 1.gitee和github创建两个代码仓库
- 2.关联两个仓库
	
```bash
git remote add github（别名-通常是origin现在绑定的是两个仓库使用仓库做别名） git@github.com:xxxx/Test.git

git remote add gitee git@gitee.com:xxxx/Test.git

```

- 3.创建文件提交仓库

```bash
touch README.md
git add README.md
git commit -m "first commit"
git push -u github master
git push -u gitee master

```



如果要推送到GitHub，使用命令：`git push github master`

如果要推送到Gitee，使用命令：`git push gitee master`

