
import os from 'os';

export function getFreeMemory() {
  return os.freemem();
}

export function getTotalMemory() {
  return os.totalmem();
}