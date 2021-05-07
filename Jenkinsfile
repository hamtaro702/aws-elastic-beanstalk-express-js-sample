pipeline {
    agent docker {
                    image 'node:lts-buster-slim' 
                    args '-p 8081:8081' 
    }
    environment {
        HOME = '.'
    }
    stages {
        
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
