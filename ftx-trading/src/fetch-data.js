const url = "https://api.gemini.com/v1/book/btcusd";

export const fetchData = async () => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Object.assign(new Error(`${res.status}: ${res.statusText}`), {
      url,
      text: await res.text(),
    })
  }
  return res.json();
  
};