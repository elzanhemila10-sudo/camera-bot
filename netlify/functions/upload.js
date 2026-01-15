exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Only POST' };
  }
  const data = JSON.parse(event.body);
  console.log('🎥 CAPTURED:', data.uid, new Date(data.ts));
  return { statusCode: 200, body: JSON.stringify({ok:true}) };
};
