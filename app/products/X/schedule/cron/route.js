export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET(request) {
  console.log("Hello world");
  return new Response("Hello world", { status: 200 });
}