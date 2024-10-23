import { exec } from 'child_process';

// Функция для запуска docker-compose up
function startDockerCompose() {
    exec('docker info', (error) => {
        if (error) {
            console.error(`Docker не запущен или не установлен: ${error.message}`);
            return;
        }
        
        exec('docker-compose up -d', (error, stdout, stderr) => {
            if (error) {
                console.error(`Ошибка: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Ошибка: ${stderr}`);
                return;
            }
            console.log(`Вывод: ${stdout}`);
        });
    });
}

// Запускаем функцию
startDockerCompose();