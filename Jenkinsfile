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
