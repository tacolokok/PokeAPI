pipeline {
  agent any

  environment {
    IMAGE_NAME = 'proyecto'
    IMAGE_TAG = 'latest'
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
        sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
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
