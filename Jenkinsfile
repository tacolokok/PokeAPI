pipeline {
    agent any

    tools {
        nodejs "node-js"
    }

    stages {
        stage('Preparar entorno') {
            steps {
                dir('reactasir') {
                    sh 'npm install'
                }
            }
        }

        stage('Build frontend') {
            steps {
                dir('reactasir') {
                    sh 'npm run build'
                }
            }
        }

        stage('Construir imagen Docker') {
            steps {
                dir('reactasir') {
                    sh 'docker build -t pokeapp:latest .'
                }
            }
        }

        stage('Desplegar en Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }

    post {
        success {
            echo '✅ Despliegue completado correctamente.'
        }
        failure {
            echo '💥 Algo falló en el pipeline.'
        }
    }
}
