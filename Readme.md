# Portafolio

Mi experiencia en el desarollo de web.

# Multiple ssh key

```bash
=======
ssh-copy-id -i ~/.ssh/heroblack hackchan@192.168.18.22
ssh-keygen -f ~/.ssh/heroblack -t rsa -b 4096 -C “inge.fabio.rojas@gmail.com”

ssh-keygen -f ~/.ssh/hackchan -t rsa -b 4096 -C “fabiorojas7@gmail.com”

eval `ssh-agent -s`
#adiciona una entrada de ssh-agent
ssh-add heroblack
ssh-add ~/.ssh/hackchan
#lista una entrada de ssh-agent
ssh-add -l
#elimina todas las entradas de ssh-agent
ssh-add -D
#clonando repositorios
git clone git@heroblack:heroblack/repo_name.git
git clone git@hackchan:hackchan/repo_name.git

#local repo
git remote set-url origin git@hackchan:hackchan/repo_name.git
#remoto
git remote add origin git@hackchan:hackchan/repo_name.git
```
