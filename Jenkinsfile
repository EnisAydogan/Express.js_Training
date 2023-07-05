pipeline {
    agent none
   
    stages {
        stage('Docker Build'){
            agent any
            steps {
                sh 'docker build -t enisaydogan/expressjs:latest .'
            }
            
        }
        stage ('Docker Push'){
            agent any
            steps {
                sh 'docker login -u enisaydogan -p Enomemo0309'
                sh 'docker push enisaydogan/expressjs:latest'
            }
        }
        stage('Docker Start'){
            agent any
            steps {
                sh 'docker login -u enisaydogan -p Enomemo0309'
                sh 'docker pull enisaydogan/expressjs:latest'
                sh 'docker run -d -p 5000:5000 --name expressjs  enisaydogan/expressjs:latest '
            }
        }
        
    }
}

