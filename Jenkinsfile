pipeline {
    agent any
    environment {
        HOME = '.'
    }
    stages {
        agent docker {
                    image 'node:lts-buster-slim' 
                    args '-p 8081:8081' 
        }
        stage('initial') {
            
            steps {
                sh 'npm install' 
            }
        }
        stage('Build and Test'){
            steps{
                sh 'npm build'
                sh 'npm test'
            }
        }
    }
}
