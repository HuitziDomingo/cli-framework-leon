// import { mkdir, writeFile } from 'fs/promises';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Controller } from './src/files/controllers';

async function createDirAndFile(dirName: string, fileName: string, content: string) {
    try {
        // Crear un directorio
        await mkdirSync(dirName, { recursive: true });
        console.log(`Directorio ${dirName} creado.`);

        // Crear un archivo dentro del directorio
        const filePath = join(dirName, fileName);
        await writeFileSync(filePath, content);
        console.log(`Archivo ${fileName} creado en ${dirName}.`);
    } catch (error) {
        console.error('Error al crear directorio o archivo:', error);
    }
}

// Uso de la función
createDirAndFile('miCarpeta', 'miArchivo.ts', Controller);