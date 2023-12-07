import { exec } from 'child_process';

const command = `npm run typeorm migration:create ./src/migrations/${process.argv[4]}`;

console.log(process.argv);
(() => exec(command, (error, stdout, stderr) => {
  if (error !== null) {
    console.error(stderr);
  }
  console.log(stdout);
}))();