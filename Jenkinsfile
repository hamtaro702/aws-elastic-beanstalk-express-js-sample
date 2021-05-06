pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 8080:8080' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm build' 
            }
        }
        stage('TEST') { 
            steps {
                sh 'npm test' 
            }
        }
    }
}