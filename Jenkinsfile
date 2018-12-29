pipeline {
    agent any

    stages {
        stage('Build Task Manager Frontend') {
            steps {
                echo 'Building Task Manager Frontend..'
                bat 'cd ./TaskManagerFrontend/ && npm install && npm run build --prod'
            }
        }
        stage('Build Task Manager Backend') {
            steps {
                echo 'Building Task Manager Backend ..'
                bat 'cd ./TaskManagerBackend/ && npm install --no-optional'
            }
        }
        stage('Testing Task Manager Frontend') {
            steps {
                echo 'Testing Task Manager Frontend...'
                bat 'cd ./TaskManagerFrontend/ && npm test --single-run true --watch=false'                
            }
        }
        stage('Testing Task Manager Backend') {
            steps {
                echo 'Testing Backend...'
                bat 'cd ./TaskManagerBackend/ && npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                bat 'docker-compose up --build -d'
            }
        }
    }
}