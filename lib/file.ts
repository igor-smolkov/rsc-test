import fs from 'fs';
import util from 'util';

const writeFile = util.promisify(fs.writeFile);

export async function uploadFile(file: Blob) {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile('public/text2.txt', buffer);
  } catch (error) {
    console.log(error);
    return { error }
  }
}
