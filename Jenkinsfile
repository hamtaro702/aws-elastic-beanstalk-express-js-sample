pipeline {
    agent any
    environment {
        HOME = '.'
    }
    stages {
        
        stage('Build') {
            agent {
                docker {
                    image 'node:lts-buster-slim' 
                    args '-p 8081:8081' 
                 }
             } 
            steps {
                sh 'npm install' 
            }
        }
    }
}
