// app/api/tasks/route.js
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   const filePath = path.join(process.cwd(), 'data', 'tasks.json');
//   const jsonData = fs.readFileSync(filePath);
//   const tasks = JSON.parse(jsonData);
//   return new Response(JSON.stringify(tasks), {
//     headers: { 'Content-Type': 'application/json' },
//   });
// }/

import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'tasks.json');
  const jsonData = fs.readFileSync(filePath);
  const tasks = JSON.parse(jsonData);
  return new Response(JSON.stringify(tasks), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Allow all origins (change '*' to specific domain for production)
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Methods you want to allow
      'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Headers you want to allow
    },
  });
}

