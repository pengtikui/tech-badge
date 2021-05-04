import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');

export const getData = () => {
  const rawContent = fs.readFileSync(
    path.join(dataDirectory, 'tech.json'),
    'utf-8'
  );
  return JSON.parse(rawContent);
};
