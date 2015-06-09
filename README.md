Git命令学习
====
参考：[git - 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)

创建一个本地仓库的克隆版本从GitHub上

git clone https://github.com/<user_name>/<module_name>'


提交到暂存区

    git add *

添加全局帐号

    git config --global user.email "you@example.com"

提交到HEAD

    git commit -m "代码提交信息"

提交到远程仓库

    git push origin master
_master 为默认分支_

创建一个叫做“feature_x”的分支，并切换过去：

    git checkout -b feature_x

切换回主分支：

    git checkout master

再把新建的分支删掉：

    git branch -d feature_x

除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的：

    git push origin <branch>

更新代码

    git pull

打上tag并发布

    git tag -a 0.0.1 -m "release v0.0.1"
    git push origin --tags
