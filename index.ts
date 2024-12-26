// import { mkdir, writeFile } from 'fs/promises';
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { Controller } from './src/files/controllers'
import { exec } from 'child_process'

async function createDirAndFile(dirName: string, fileName: string, content: string) {
    try {
        // Crear un directorio
        await mkdirSync(dirName, { recursive: true })
        console.log(`Directorio ${dirName} creado.`)

        // Crear un archivo dentro del directorio
        const filePath = join(dirName, fileName)
        await writeFileSync(filePath, content)
        console.log(`Archivo ${fileName} creado en ${dirName}.`)

        // Función para verificar si Express está instalado
        function isExpressInstalled(): boolean {
            try {
                require.resolve('express')
                return true
            } catch (error) {
                console.error(error)
                return false
            }
        }
        //Inatalacion de express.
        if (!isExpressInstalled()) {
            exec('bun add express && bun add @types/express', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error al instalar Express: ${error}`)
                    return
                }
                console.log(stdout)
            })
        }
    } catch (error) {
        console.error('Error al crear directorio o archivo:', error)
    }
}



// Uso de la función
createDirAndFile('miCarpeta', 'miArchivo.ts', Controller)

