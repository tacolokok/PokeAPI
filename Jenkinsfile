pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'proyecto:latest'
        TAR_FILE = 'imagen.tar'
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
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Exportar imagen a TAR') {
            steps {
                echo '📦 Exportando imagen a archivo TAR...'
                sh "docker save ${DOCKER_IMAGE} -o ${TAR_FILE}"
            }
        }

        // No ejecutamos k3s ctr images import porque no está disponible en Jenkins
        // Lo haces tú desde el host manualmente

        stage('Aviso') {
            steps {
                echo '⚠️  IMPORTANTE: Ejecuta manualmente desde el host:'
                echo '    k3s ctr images import /ruta/al/imagen.tar'
                echo '    kubectl rollout restart deployment proyecto'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completado. Imagen exportada.'
        }
        failure {
            echo '💥 Algo falló en el pipeline.'
        }
    }
}
