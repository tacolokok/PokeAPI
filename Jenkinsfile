pipeline {
    agent any

    stages {
        stage('Clonar Repo') {
            steps {
                echo 'Clonando el repositorio...'
            }
        }

        stage('Instalar dependencias') {
            steps {
                echo 'Instalando dependencias...'
                // Por ejemplo: sh 'npm install'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                echo 'Ejecutando pruebas...'
                // Por ejemplo: sh 'npm test'
            }
        }

        stage('Finalizado') {
            steps {
                echo 'Pipeline completado con éxito 🚀'
            }
        }
    }
}
