pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Staging') {
            sh "pid=\$(lsof -i:8080 -t); kill -TERM \$pid || kill -KILL \$pid"
            withEnv(['JENKINS_NODE_COOKIE=dontkill']) {
                sh 'mvn spring-boot:run -Dserver.port=8080 &'
            }
        }
    }
}