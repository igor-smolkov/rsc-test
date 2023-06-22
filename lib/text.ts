import fs from 'fs';
import path from 'path';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export async function readText() {
  try {
    const p = path.join(process.cwd(), '/');
    const text = await readFile(`${p}text.txt`, 'utf-8');
    return { text }
  } catch (error) {
    return { error }
  }
}

export async function readText2() {
  try {
    const p = path.join(process.cwd(), 'tmp/');
    const text = await readFile(`${p}text2.txt`, 'utf-8');
    return { text }
  } catch (error) {
    return { error }
  }
}
