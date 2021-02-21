const url = "http://api.coincap.io/v2";

async function getAssets() {
  const res = await fetch(`${url}/assets?limit=20`);
  const res_json = await res.json();
  return res_json.data;
}

async function getAsset(coin) {
  const res = await fetch(`${url}/assets/${coin}`);
  const res_json = await res.json();
  return res_json.data;
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const res = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const res_json = await res.json();
  return res_json.data;
}

async function getMarkets(coin) {
  const res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  const res_json = await res.json();
  return res_json.data;
}

async function getExchange(id) {
  const res = await fetch(`${url}/exchanges/${id}?baseId=${id}`);
  const res_json = await res.json();
  return res_json.data;
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
