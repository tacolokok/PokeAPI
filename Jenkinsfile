pipeline {
    agent any

    environment {
        IMAGE_NAME = "proyecto:latest"
    }

    stages {
        stage('Preparar entorno') {
            steps {
                echo '🧹 Preparando entorno...'
                sh 'ls -la'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                echo '🐳 Construyendo imagen Docker...'
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Importar imagen a k3s') {
            steps {
                echo '📦 Importando imagen en k3s...'
                sh "docker save $IMAGE_NAME -o imagen.tar"
                sh "k3s ctr images import imagen.tar"
            }
        }

        stage('Desplegar en Kubernetes') {
            steps {
                echo '🚀 Reiniciando despliegue en Kubernetes...'
                sh "kubectl rollout restart deployment proyecto"
            }
        }
    }

    post {
        failure {
            echo "💥 Algo falló en el pipeline."
        }
        success {
            echo "✅ Despliegue completado correctamente."
        }
    }
}
