pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                nodejs(nodeJSInstallationName: 'Default') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}