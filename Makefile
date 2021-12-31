DIR := ${CURDIR}

default: build up
destroy: kill remove
build:
	docker build -t metabrainz/app_test -f Dockerfile .
up:
	docker run -d --mount type=bind,source=$(DIR)/app,target=/app -p 8080:8080 --name mb_app metabrainz/app_test
down:
	docker container kill mb_app && docker container rm mb_app
dev:
	docker run -it --rm --mount type=bind,source=$(DIR)/app,target=/app -p 8080:8080 --name mb_app metabrainz/app_test bash
kill:
	docker container kill mb_app
remove:
	docker container rm mb_app