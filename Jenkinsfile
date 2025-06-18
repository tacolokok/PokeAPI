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
            }
        }

        stage('Importar en K3s') {
            steps {
                echo '📦 Importando imagen a K3s mediante SSH...'
                sh 'ssh root@localhost "/usr/local/bin/k3s ctr images import /root/PokeAPI/imagen.tar"'
            }
        }

        stage('Desplegar en Kubernetes') {
            steps {
                echo '🚀 Desplegando en Kubernetes...'
                sh 'ssh root@localhost "kubectl apply -f /root/PokeAPI/k8s/deployment.yaml"'
                sh 'ssh root@localhost "kubectl apply -f /root/PokeAPI/k8s/service.yaml"'
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
