import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export async function GET(req: any, res: any) {
  console.log('here');
  const filePath = 'text.txt';
  try {
    const imageBuffer = await readFile(filePath, 'utf-8');

    return new Response(imageBuffer, {
      headers: {
        'Content-Type': 'text/plain',
      },
      status: 200,
    });
  } catch (e) {
    console.log(e)
  }
}
