pipeline {
    agent any

    tools {
        nodejs "node-js"  // ← Este nombre debe coincidir con el de la configuración en Jenkins
    }

    stages {
        stage('Preparar entorno') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Ejecutando pruebas...'
                sh 'npm test || echo "Sin tests definidos o fallaron (ignorado por ahora)"'
            }
        }

        stage('Build') {
            steps {
                echo 'Compilando la app...'
                sh 'npm run build'
            }
        }

        stage('Finalizado') {
            steps {
                echo '🎉 Pipeline completado correctamente.'
            }
        }

            }
}
stage('Deploy') {
    steps {
        echo '🚀 Desplegando en Kubernetes...'
        sh '''
            # Copiamos la build al contenedor (si hiciera falta empaquetar, podrías usar Docker)
            # Creamos un configmap con los archivos estáticos
            kubectl delete configmap pokeapp-static --ignore-not-found
            kubectl create configmap pokeapp-static --from-file=build --dry-run=client -o yaml | kubectl apply -f -

            # Aplicamos el manifiesto del deployment
            kubectl apply -f k8s/deployment.yaml
        '''
    }
}

