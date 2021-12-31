from ubuntu:20.04

ENV CHOKIDAR_USEPOLLING=true
ENV APP_DIR="/app"
WORKDIR ${APP_DIR}
COPY ./app ./

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN chmod +x install.sh && sed -i -e 's/\r$//' install.sh && ./install.sh