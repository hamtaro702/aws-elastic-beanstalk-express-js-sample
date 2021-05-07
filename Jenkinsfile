pipeline {
    agent any
    
    stages {
        
        stage('Build') {
            agent {
                docker {
                    image 'node:16-alpine3.11' 
                    args '-p 8080:8080' 
                 }
             } 
            steps {
                sh 'npm install' 
            }
        }
    }
}
