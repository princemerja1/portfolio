// /src/app/api/projects/route.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContent);
  return new Response(JSON.stringify(projects.reverse()));
}
