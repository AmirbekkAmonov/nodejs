
import process from 'process';

export function getProcessID() {
  return process.pid;
}

export function getProcessTitle() {
  return process.title;
}