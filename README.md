# Project Mwenbwa

Project realized by Ahmed Soleiman, Antonio Maïta and Arnaud De Baerdemaeker.
<br>
## What is it ?

Project Mwenbwa is an online game where you can can buy trees from the City of Liège with an in-game money called "leaves" and become its owner.

## How it is supposed to work ?

At your registration, you will receive 3 random free trees and a certain number of leaves.
This number of leaves will vary according to some conditions :

* every 15 mins, each player will receive some leaves,
* every hours, each player will lose half of their leaves.

The players are allowed to buy trees that a free aswell as trees that belong to other players. The price will be set accordingly.
It is also possible to "lock" a tree which renders it impossible to buy for other players. There is a price for that too.

## Work effectively done

The connection to the database is set.
We successfully rendered the map with the position of 7.238 trees. Each tree has an icon (unfortunely misplaced), its name and own value displayed. On higher levels, clusters are appearing to group trees.
The header contains 3 links which allow to get back to the homepage, open the modal with the sign in content, and open the modal with the log in content. The registration modal works save the user's credentials in the database. The password is hashed with bcrypt.js before being put into the database.