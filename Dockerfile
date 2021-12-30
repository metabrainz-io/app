from ubuntu:20.04

ENV CHOKIDAR_USEPOLLING=true
ENV APP_DIR="/app"
WORKDIR ${APP_DIR}
COPY . ./

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ADD https://github.com/just-containers/s6-overlay/releases/download/v2.2.0.1/s6-overlay-amd64-installer /tmp/
RUN chmod +x /tmp/s6-overlay-amd64-installer && /tmp/s6-overlay-amd64-installer /
RUN chmod +x install.sh && sed -i -e 's/\r$//' install.sh && ./install.sh
RUN ssh-keygen -t rsa -f ~/.ssh/id_rsa -N ""
ADD services.d/ssh /root/ssh.sh
RUN chmod 755 /root/ssh.sh && sed -i -e 's/\r$//' /root/ssh.sh

ENTRYPOINT ["/root/ssh.sh"]