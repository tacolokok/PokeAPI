pipeline {
    agent any

    environment {
        IMAGE_NAME = 'proyecto:latest'
        IMAGE_TAR = 'imagen.tar'
        IMPORT_SCRIPT = '/usr/local/bin/importar_imagen_k3s.sh'
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
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Exportar imagen') {
            steps {
                echo '📦 Exportando imagen...'
                sh "docker save ${IMAGE_NAME} -o ${IMAGE_TAR}"
            }
        }

        stage('Importar imagen en k3s') {
            steps {
                echo '📦 Importando imagen en k3s...'
                sh "${IMPORT_SCRIPT}"
            }
        }

        stage('Desplegar en Kubernetes') {
            steps {
                echo '🚀 Desplegando en Kubernetes...'
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
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
