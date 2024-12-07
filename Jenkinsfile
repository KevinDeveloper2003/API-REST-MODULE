pipeline {
    agent any

    stages {
        stage('Clonacion del Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/KevinDeveloper2003/API-REST-MODULE.git'
            }
        }
        stage('Construccion de Docker image') {
            steps{
                script {
                    docker.build('myapp-modulo:v1', '.')
                }
            }
        }
        stage('Desplegar contenedores docker') {
            steps {
                script {
                    withCredentials([
              string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
            ]) {
                    sh 'docker-compose up -d'
                    }
                }
            }
        }
    }
}