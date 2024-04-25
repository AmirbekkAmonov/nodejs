
import { getFreeMemory, getTotalMemory } from './memory.js';
import { getProcessID, getProcessTitle } from './process.js';
import { getUptime } from './uptime.js';

const freeMemory = getFreeMemory();
const totalMemory = getTotalMemory();
const processID = getProcessID();
const processTitle = getProcessTitle();
const uptime = getUptime();

console.log('Free memory:', freeMemory);
console.log('Total memory:', totalMemory);
console.log('Process ID:', processID);
console.log('Process Title:', processTitle);
console.log('Uptime:', uptime);