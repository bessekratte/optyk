pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'mvn spring-boot:run' 
            }
        }
    }
}    
