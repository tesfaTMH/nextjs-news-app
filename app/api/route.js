export const GET = (request) => {
  console.log(request);
  //return Response.json({ message: "Message fro API route handler" });
  return new Response("Message fro API route handler");
};
