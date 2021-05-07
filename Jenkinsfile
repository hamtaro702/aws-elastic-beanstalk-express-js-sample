pipeline {
    agent any
    
    stages {
        
        stage('Build') {
            agent {
                docker {
                    image 'node:16-alpine3.11' 
                    args '-p 8081:8081' 
                 }
             } 
            steps {
                sh 'npm install' 
            }
        }
    }
}
