// run-migrations.js
const { exec } = require('child_process');

const command = 'npm run migration:run';

exec(command, (error, stdout, stderr) => {
  if (error !== null) {
    console.error(stderr);
  }
  console.log(stdout);
});
