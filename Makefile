deploy:
	rm -rf public
	npm run build
	mv build public
	firebase deploy