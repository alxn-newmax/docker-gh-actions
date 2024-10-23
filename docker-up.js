import { exec } from 'child_process';

// Функция для запуска docker-compose up
function startDockerCompose() {
    exec('docker login -u alxnnewmax -p dckr_pat_d411YDUBfm03_7ByJPy7AKuR-AY', (error, stdout, stderr) => {
        if (error) {
            console.error(`Docker не запущен или не установлен: ${error.message}`);
            return;
        }

        console.log(`Вывод: ${stdout}`);

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