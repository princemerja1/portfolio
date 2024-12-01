import path from 'path';
import fs from 'fs';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContent);

  return new Response(JSON.stringify(projects.reverse()), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}