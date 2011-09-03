nodemud runs under node.  It's set up to work with heroku out of the box for free hosting.  
Here's the instructions for getting that to work:

Prerequisites

Basic Node.js knowledge, including an installed version of Node.js and NPM.
Your application must run on Node.js 0.4.7.
Your application must use NPM to manage dependencies.
A Heroku user account. Signup is free and instant.

Next the heroku command line must be installed.
Linux users: http://toolbelt.herokuapp.com/linux/readme
OSX: http://toolbelt.herokuapp.com/osx/download
Windows: http://toolbelt.herokuapp.com/windows/download

Once installed, you’ll have access to the heroku command from your command shell. Log in using the email address and password you used when creating your Heroku account:

```
$ heroku login
Enter your Heroku credentials.
Email: adam@example.com
Password: 
Could not find an existing public key.
Would you like to generate one? [Yn] 
Generating new SSH public key.
Uploading ssh public key /Users/adam/.ssh/id_rsa.pub
```

Once you have heroku commandline you can create your app

```
heroku create name_of_project
heroku ps:scale web:1
```

Now you simply need to push a git repo.  If you already have a repo you can skip this set. Otherwise set it up:

```
git init
git add .
git push heroku master
```

The game will boot up and name_of_project.heroku.com is the address.
If there's a problem try heroku logs to see what is keeping it from booting. 

