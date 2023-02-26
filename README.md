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





### git log相关命令

查看最近2次提交

```bash
git log -2
```

查看最近2次 修改文件记录

```bash
git log -2 -p
```

查看git log的统计

```bash
git log --stat
```

退出git log 模式 Ctrl + Z



### 取消缓存区文件

比如git add .把文件`a.txt`和`b.txt`全部添加到缓存区了，此时不想把`b.txt`添加缓存区，则可以：

```bash
git rest HEAD b.txt

#  或者 全部撤销，再重新添加到缓存区
git rest HEAD . 
```



### 创建标签

-m 后面跟上 标签描述信息

```bash
git tag -a v1.0.0 -m "第一个版本号"
git tag -a help -m "help版本号"
```

检索标签

```bash
# 获取所有标签
git tag -l

# 检索条件 以v开头
git tag -l "v*"
```

把标签推送到远程仓库

```bash
# 推送某个tag
# git push 远程仓库名 tag名  --- 如： 推送help标签
git push origin help

# 推送所有标签
git push origin --tags
```

