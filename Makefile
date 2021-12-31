DIR := ${CURDIR}

build:
	docker build -t metabrainz/mb_app_base -f Dockerfile .
test:
	docker run -d --mount type=bind,source=$(DIR)/app,target=/app -p 8080:8080 --name mb_app_base metabrainz/mb_app_base
publish:
	docker tag metabrainz/app_test bwo0877hpnza/mb_app_base:0.1
	docker push bwo0877hpnza/mb_app_base:0.1
