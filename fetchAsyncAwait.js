
https://apipheny.io/free-api/#apis-without-key 
async function allPublicApi() {
  const response = await fetch('https://api.publicapis.org/entries');

  if (!response.ok) {
    const message = `en error as occured ${response.status}`;
    throw new Error(message);
  }
  console.log('response', response.json());
  const entries = await response.json();
  return entries;
};


export {
  allPublicApi
}