FROM openjdk:18

ENV ENVIRONMENT=prod

LABEL maintainer="Employees@example.de"

ADD backend/target/ZooManagement.jar ZooManagement.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /ZooManagement.jar" ]