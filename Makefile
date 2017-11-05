NODE_SASS=./node_modules/.bin/node-sass

build:
	@rm -rf ./public
	@make css templates images

css:
	$(NODE_SASS) ./assets/css -o ./_css --output-style compressed

images:
	cp -a ./assets/images/. ./_img

templates:
	cp -a ./assets/templates/. .
