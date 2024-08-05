// app/api/tasks/route.js
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'tasks.json');
  const jsonData = fs.readFileSync(filePath);
  const tasks = JSON.parse(jsonData);
  return new Response(JSON.stringify(tasks), {
    headers: { 'Content-Type': 'application/json' },
  });
}
