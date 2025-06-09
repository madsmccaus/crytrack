# crytrack

CryptoDash is a simple demonstration dashboard for cryptocurrency prices.
The app now pulls pricing data from both the CoinGecko and CoinMarketCap
APIs. If both requests succeed, the dashboard displays the average of the
two sources for each metric. Should either API fail, data from the working
service will be used. If neither request succeeds, the app falls back to
built‑in mock data.

To use the CoinMarketCap API you must provide your own API key. Edit the
`cmcApiKey` value in `app.js` with your key before running the dashboard.
