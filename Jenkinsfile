pipeline {
    agent any

    stages {
        stage('Build Angular Frontend App') {
            steps {
                echo 'Building Angular..'
                bat 'cd ./TaskManagerFrontend/ && npm install && npm run build --prod'
            }
        }
        stage('Build Node Backend App') {
            steps {
                echo 'Building Nodejs ..'
                bat 'cd ./TaskManagerBackend/ && npm install'
            }
        }
        stage('Testing Frontend') {
            steps {
                echo 'Testing Frontend...'
                bat 'cd ./TaskManagerFrontend/ && npm test --single-run true --watch=false'                
            }
        }
        stage('Testing Backend') {
            steps {
                echo 'Testing Backend...'
                bat 'cd ./TaskManagerBackend/ && npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application'
            }
        }
    }
}