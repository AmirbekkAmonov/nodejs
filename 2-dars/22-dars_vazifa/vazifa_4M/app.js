const os = require('os');

const command = process.argv[2];

if (command === 'check-memory') {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  console.log('Total memory:', formatMemory(totalMemory));
  console.log('Used memory:', formatMemory(usedMemory));
  console.log('Free memory:', formatMemory(freeMemory));
} else {
  console.log('No command provided');
}

function formatMemory(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const index = Math.floor(Math.log2(bytes) / 10);
  const size = bytes / Math.pow(1024, index);

  return `${size.toFixed(2)} ${units[index]}`;
}