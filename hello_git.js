var note = 'hello_git';
console.log(note ,'\n');
note = '# 在GitHub上下载\
git clone https://github.com/<user_name>/<module_name>';
console.log(note ,'\n');
note = '# 提交到GitHub\
git add -A\
git commit -m "first commit"\
# 如果上一步失败，可根据提示操作\
git push -u origin master';
console.log(note ,'\n');