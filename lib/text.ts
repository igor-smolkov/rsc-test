import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export async function readText() {
  try {
    const text = await readFile('text.txt', 'utf-8');
    return { text }
  } catch (error) {
    return { error }
  }
}

export async function readText2() {
  try {
    const text = await readFile('text2.txt', 'utf-8');
    return { text }
  } catch (error) {
    return { error }
  }
}
