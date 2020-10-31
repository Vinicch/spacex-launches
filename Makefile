restore:
	cd client && yarn
	cd server && yarn

front-end:
	cd client && yarn start

back-end:
	nodemon server/index.js

run:
	concurrently -n "CLIENT,SERVER" "make front-end" "make back-end"

deploy:
	node server/index.js