import fs from 'fs';
import path from 'path';
import util from 'util';

const writeFile = util.promisify(fs.writeFile);

export async function uploadFile(file: Blob) {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const p = path.join(process.cwd(), 'public/');
    await writeFile(`${p}text2.txt`, buffer);
  } catch (error) {
    console.log(error);
    return { error }
  }
}
