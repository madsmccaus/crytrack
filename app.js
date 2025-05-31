async function fetchPrices() {
  const prices = { BTC: [], ETH: [], DOGE: [] };

  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd');
    const data = await res.json();
    prices.BTC.push(data.bitcoin.usd);
    prices.ETH.push(data.ethereum.usd);
    prices.DOGE.push(data.dogecoin.usd);
  } catch (err) { console.error('CoinGecko failed:', err); }

  try {
    const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,DOGE', {
      headers: { 'X-CMC_PRO_API_KEY': '99279fc6-7f68-45df-89dd-a7e2c64ddf75' }
    });
    const data = await res.json();
    prices.BTC.push(data.data.BTC.quote.USD.price);
    prices.ETH.push(data.data.ETH.quote.USD.price);
    prices.DOGE.push(data.data.DOGE.quote.USD.price);
  } catch (err) { console.error('CoinMarketCap failed:', err); }

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
  } catch (err) { console.error('CryptoCompare failed:', err); }

  return {
    BTC: average(prices.BTC),
    ETH: average(prices.ETH),
    DOGE: average(prices.DOGE)
  };
}

function average(arr) {
  const valid = arr.filter(n => typeof n === 'number' && !isNaN(n));
  const sum = valid.reduce((a, b) => a + b, 0);
  return valid.length ? (sum / valid.length).toFixed(2) : 'N/A';
}

async function updateDashboardPrices() {
  const prices = await fetchPrices();
  document.querySelector('.bitcoin .current-price')?.textContent = `$${prices.BTC}`;
  document.querySelector('.ethereum .current-price')?.textContent = `$${prices.ETH}`;
  document.querySelector('.dogecoin .current-price')?.textContent = `$${prices.DOGE}`;
}

async function fetchPolicyNews() {
  const endpoint = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.coindesk.com/arc/outboundfeeds/rss/?outputType=xml';
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    const filtered = data.items.filter(item =>
      /sec|regulation|policy|crypto law|cftc|mica|executive order/i.test(item.title + item.description)
    );
    renderPolicyNews(filtered.slice(0, 6));
  } catch (err) {
    console.error('Policy news fetch failed:', err);
  }
}

function renderPolicyNews(articles) {
  const container = document.getElementById('policyTimeline');
  if (!container) return;

  container.innerHTML = articles.map(article => `
    <div class="card" style="margin-bottom: 24px;">
      <div class="card__body">
        <h3 style="margin-bottom: 8px;">${article.title}</h3>
        <p style="color: var(--color-text-secondary); font-size: 14px; margin-bottom: 12px;">
          ${new Date(article.pubDate).toLocaleDateString('en-US')}
        </p>
        <p>${article.description.slice(0, 200)}...</p>
        <a href="${article.link}" target="_blank" class="btn btn--sm btn--outline" style="margin-top: 12px;">Read more</a>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  // === Theme ===
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(theme) {
    root.setAttribute('data-color-scheme', theme);
    localStorage.setItem('preferredTheme', theme);
  }
  function toggleTheme() {
    const current = root.getAttribute('data-color-scheme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }
  const saved = localStorage.getItem('preferredTheme');
  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  themeToggle?.addEventListener('click', toggleTheme);

  // === Tabs ===
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tab)?.classList.add('active');
    });
  });

  // === Fetch data
  updateDashboardPrices();
  setInterval(updateDashboardPrices, 60000); // every 1 minute
  fetchPolicyNews();
  setInterval(fetchPolicyNews, 1800000);     // every 30 mins
});
