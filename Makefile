NODE_SASS=./node_modules/.bin/node-sass

build:
	@rm -rf ./public
	@make css templates

css:
	$(NODE_SASS) ./assets/css -o ./_css --output-style compressed

templates:
	cp -a ./assets/templates/. .
