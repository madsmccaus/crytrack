// app.js (module type required in index.html)

async function fetchPrices() {
  const prices = {
    BTC: [],
    ETH: [],
    DOGE: []
  };

  // === CoinGecko ===
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd'
    );
    const data = await res.json();
    prices.BTC.push(data.bitcoin.usd);
    prices.ETH.push(data.ethereum.usd);
    prices.DOGE.push(data.dogecoin.usd);
  } catch (err) {
    console.error('CoinGecko failed:', err);
  }

  // === CoinMarketCap ===
  try {
    const res = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,DOGE',
      {
        headers: {
          'X-CMC_PRO_API_KEY': '99279fc6-7f68-45df-89dd-a7e2c64ddf75'
        }
      }
    );
    const data = await res.json();
    prices.BTC.push(data.data.BTC.quote.USD.price);
    prices.ETH.push(data.data.ETH.quote.USD.price);
    prices.DOGE.push(data.data.DOGE.quote.USD.price);
  } catch (err) {
    console.error('CoinMarketCap failed:', err);
  }

  // === CryptoCompare ===
  try {
    const urls = {
      BTC: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD',
      ETH: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
      DOGE: 'https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD'
    };

    for (const coin of ['BTC', 'ETH', 'DOGE']) {
      const res = await fetch(urls[coin]);
      const data = await res.json();
      prices[coin].push(data.USD);
    }
  } catch (err) {
    console.error('CryptoCompare failed:', err);
  }

  r
