pipeline {
    agent any

    environment {
        REMOTE_HOST = "62.171.152.253"
        REMOTE_USER = "root"
        SSH_KEY = "/var/jenkins_home/.ssh/id_rsa"
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
                sh 'docker build -t proyecto:latest .'
            }
        }

        stage('Exportar imagen') {
            steps {
                echo '📦 Exportando imagen...'
                sh 'docker save proyecto:latest -o imagen.tar'
            }
        }

        stage('Importar en K3s') {
            steps {
                echo '📦 Enviando imagen por SCP...'
                sh 'scp -i /var/jenkins_home/.ssh/id_rsa -o StrictHostKeyChecking=no imagen.tar root@62.171.152.253:/tmp/imagen.tar'


                echo '📦 Importando imagen a K3s vía SSH...'
                sh 'ssh -i /var/jenkins_home/.ssh/id_rsa -o StrictHostKeyChecking=no root@62.171.152.253 "k3s ctr images import /tmp/imagen.tar"'

            }
        }

        stage('Desplegar en Kubernetes') {
            steps {
                echo '🚀 Desplegando aplicación...'
                sh 'ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "kubectl apply -f /root/PokeAPI/k8s/deployment.yaml"'
            }
        }
    }

    post {
        failure {
            echo '💥 Algo falló en el pipeline.'
        }
    }
}
