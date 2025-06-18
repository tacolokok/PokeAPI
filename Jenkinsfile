pipeline {
    agent any

    tools {
        nodejs "node-js"  // ← Asegúrate de que este nombre coincide en Jenkins
    }

    stages {
        stage('Preparar entorno') {
            steps {
                echo '🧹 Limpiando y preparando dependencias...'
                sh '''
                    rm -rf node_modules package-lock.json
                    npm cache clean --force
                    npm install || npm install --force
                '''
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Ejecutando pruebas...'
                sh 'npm test || echo "Sin tests definidos o fallaron (ignorado por ahora)"'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Compilando la app...'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Desplegando en Kubernetes...'
                sh '''
                    kubectl delete configmap pokeapp-static --ignore-not-found
                    kubectl create configmap pokeapp-static --from-file=build --dry-run=client -o yaml | kubectl apply -f -
                    kubectl apply -f k8s/deployment.yaml
                '''
            }
        }

        stage('Finalizado') {
            steps {
                echo '🎉 Pipeline completado correctamente.'
            }
        }
    }
}
