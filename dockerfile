FROM node:alpine
ENV PORT=3000

RUN mkdir -p /var/app
WORKDIR /var/app

ADD . /var/app
RUN npm install

EXPOSE ${PORT}
CMD npm start 