About
This is a demo on a To-do list with MongoDB, ExpressJS, AngularJS, and Node (MEAN Stack).


Mongo install on ubuntu
  $ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
  $ echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
  $ sudo apt-get update
  $ sudo apt-get install mongodb-10gen
  $ sudo service mongodb start
  $ sudo service mongodb stop
  $ sudo service mongodb restart

  $ mongo
  $ db # show database you are using
  $ use <db> 
  $ show dbs/collections/users/profile

  # create database
  $ use mydb
  $ show dbs
  # create ‘users’ collection with a dummy document(value) {username:”paul”}
  $ db.users.save({username:”paul”})
  $ db.users.find()
  $ show dbs

  $ use test
  $ db.addUser(‘admin’,’password’);
