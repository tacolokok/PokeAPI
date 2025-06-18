pipeline {
    agent any

    environment {
        IMAGE_NAME = 'proyecto:latest'
        IMAGE_TAR = 'imagen.tar'
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
                // Copiarla al host si Jenkins no está en el mismo sistema
                sh "scp ${IMAGE_TAR} root@localhost:/root/${IMAGE_TAR}"
            }
        }

        stage('Importar imagen en k3s') {
            steps {
                echo '📦 Importando imagen en k3s...'
                sh "ssh root@localhost 'k3s ctr images import /root/${IMAGE_TAR}'"
            }
        }

        stage('Desplegar en Kubernetes') {
            steps {
                echo '🚀 Desplegando en Kubernetes...'
                sh "ssh root@localhost 'kubectl apply -f /root/PokeAPI/k8s/deployment.yaml'"
                sh "ssh root@localhost 'kubectl apply -f /root/PokeAPI/k8s/service.yaml'"
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
