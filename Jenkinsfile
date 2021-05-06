pipeline {
    agent any
    
    stages {
        
        stage('Build') {
            agent {
                docker {
                    image 'node:lts-buster-slim' 
                    args '-p 8080:8080' 
                 }
             } 
            steps {
                sh 'npm install' 
            }
        }
    }
}