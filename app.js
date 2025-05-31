// Application data
const cryptoData = {
  current_data: {
    Bitcoin: {
      symbol: "BTC",
      current_price: 105745.4,
      yesterday_price: 107838.2,
      daily_change: -1.94,
      yearly_change: 56.48,
      year_ago_price: 67577.27,
      market_cap: "2.07T",
      all_time_high: 111814,
      ath_date: "May 23, 2025"
    },
    Ethereum: {
      symbol: "ETH",
      current_price: 2633.14,
      yesterday_price: 2676.27,
      daily_change: -1.61,
      yearly_change: -30.07,
      year_ago_price: 3765.30,
      market_cap: "305.52B",
      all_time_high: 4891.70,
      ath_date: "November 2021"
    },
    Dogecoin: {
      symbol: "DOGE",
      current_price: 0.2158,
      yesterday_price: 0.2211,
      daily_change: -2.36,
      yearly_change: 31.85,
      year_ago_price: 0.1637,
      market_cap: "28.94B",
      all_time_high: 0.7376,
      ath_date: "May 2021"
    }
  },
  policy_events: [
    {
      date: "2025-01-23",
      title: "Trump Crypto Executive Order",
      category: "Policy",
      impact: "Bullish",
      description: "Trump signed executive order declaring crypto national priority and establishing inter-agency task force",
      affected_coins: ["BTC", "ETH", "DOGE"]
    },
    {
      date: "2025-02-21",
      title: "SEC Drops Major Cases",
      category: "Regulation",
      impact: "Bullish",
      description: "SEC dismissed enforcement actions against Coinbase, Opensea, and Robinhood",
      affected_coins: ["BTC", "ETH"]
    },
    {
      date: "2025-02-27",
      title: "Meme Coins Not Securities",
      category: "Regulation",
      impact: "Bullish",
      description: "SEC announced memecoins no longer considered securities subject to SEC oversight",
      affected_coins: ["DOGE"]
    },
    {
      date: "2025-04-24",
      title: "Fed Banking Guidance Reversal",
      category: "Policy",
      impact: "Bullish",
      description: "Federal Reserve rescinded restrictive guidance on crypto activities for banks",
      affected_coins: ["BTC", "ETH", "DOGE"]
    },
    {
      date: "2025-05-15",
      title: "SEC Withdraws Broker-Dealer Guidance",
      category: "Regulation",
      impact: "Bullish",
      description: "SEC withdrew 2019 Joint Statement restricting broker-dealers from crypto custody",
      affected_coins: ["BTC", "ETH"]
    },
    {
      date: "2025-05-29",
      title: "SEC Crypto Staking Guidance",
      category: "Regulation",
      impact: "Bullish",
      description: "SEC clarified that protocol staking activities do not need securities registration",
      affected_coins: ["ETH"]
    }
  ],
  news_events: [
    {
      date: "2024-12-04",
      title: "Bitcoin Crosses $100K",
      category: "Milestone",
      impact: "Bullish",
      description: "Bitcoin reached the historic $100,000 threshold for the first time",
      affected_coins: ["BTC"]
    },
    {
      date: "2025-01-24",
      title: "Bitcoin ETF Record Inflows",
      category: "Institutional",
      impact: "Bullish",
      description: "Bitcoin ETFs attracted over $38 billion in net inflows during first year",
      affected_coins: ["BTC"]
    },
    {
      date: "2025-05-30",
      title: "Bitcoin ETF Outflows, ETH ETF Inflows",
      category: "Institutional",
      impact: "Mixed",
      description: "Bitcoin ETFs saw $208.78M outflows while Ethereum ETFs gained $97.45M",
      affected_coins: ["BTC", "ETH"]
    },
    {
      date: "2025-05-25",
      title: "Bitcoin New ATH",
      category: "Milestone",
      impact: "Bullish",
      description: "Bitcoin achieved new all-time high of $111,814",
      affected_coins: ["BTC"]
    },
    {
      date: "2025-05-01",
      title: "Trump Media Bitcoin Investment",
      category: "Institutional",
      impact: "Bullish",
      description: "$2.5 billion institutional investment for Bitcoin treasury allocation",
      affected_coins: ["BTC"]
    }
  ],
  may_price_data: {
    Bitcoin: [
      {date: "2025-05-01", price: 94235.75},
      {date: "2025-05-02", price: 96426.95},
      {date: "2025-05-03", price: 96855.57},
      {date: "2025-05-04", price: 95922.87},
      {date: "2025-05-05", price: 94326.62},
      {date: "2025-05-06", price: 94758.82},
      {date: "2025-05-07", price: 96854.53},
      {date: "2025-05-08", price: 97026.49},
      {date: "2025-05-09", price: 103076.3},
      {date: "2025-05-10", price: 102962.5},
      {date: "2025-05-11", price: 104630.9},
      {date: "2025-05-12", price: 103994.1},
      {date: "2025-05-13", price: 102876.8},
      {date: "2025-05-14", price: 104184.5},
      {date: "2025-05-15", price: 103594.4},
      {date: "2025-05-16", price: 103708.9},
      {date: "2025-05-17", price: 103556.0},
      {date: "2025-05-18", price: 103212.4},
      {date: "2025-05-19", price: 106030.6},
      {date: "2025-05-20", price: 105629.4},
      {date: "2025-05-21", price: 106786.7},
      {date: "2025-05-22", price: 109665.9},
      {date: "2025-05-23", price: 111560.4},
      {date: "2025-05-24", price: 107216.7},
      {date: "2025-05-25", price: 107831.4},
      {date: "2025-05-26", price: 108861.8},
      {date: "2025-05-27", price: 109377.7},
      {date: "2025-05-28", price: 109068.5},
      {date: "2025-05-29", price: 107838.2},
      {date: "2025-05-30", price: 105745.4}
    ],
    Ethereum: [
      {date: "2025-05-01", price: 1794.05},
      {date: "2025-05-02", price: 1838.85},
      {date: "2025-05-03", price: 1841.43},
      {date: "2025-05-04", price: 1834.50},
      {date: "2025-05-05", price: 1808.16},
      {date: "2025-05-06", price: 1820.00},
      {date: "2025-05-07", price: 1816.17},
      {date: "2025-05-08", price: 1810.32},
      {date: "2025-05-09", price: 2197.56},
      {date: "2025-05-10", price: 2341.41},
      {date: "2025-05-11", price: 2583.68},
      {date: "2025-05-12", price: 2507.47},
      {date: "2025-05-13", price: 2492.43},
      {date: "2025-05-14", price: 2676.64},
      {date: "2025-05-15", price: 2603.72},
      {date: "2025-05-16", price: 2542.30},
      {date: "2025-05-17", price: 2544.39},
      {date: "2025-05-18", price: 2475.05},
      {date: "2025-05-19", price: 2465.34},
      {date: "2025-05-20", price: 2526.99},
      {date: "2025-05-21", price: 2524.27},
      {date: "2025-05-22", price: 2558.95},
      {date: "2025-05-23", price: 2657.17},
      {date: "2025-05-24", price: 2519.81},
      {date: "2025-05-25", price: 2529.44},
      {date: "2025-05-26", price: 2546.62},
      {date: "2025-05-27", price: 2562.17},
      {date: "2025-05-28", price: 2662.09},
      {date: "2025-05-29", price: 2676.27},
      {date: "2025-05-30", price: 2633.14}
    ],
    Dogecoin: [
      {date: "2025-05-01", price: 0.1724},
      {date: "2025-05-02", price: 0.1807},
      {date: "2025-05-03", price: 0.1814},
      {date: "2025-05-04", price: 0.1758},
      {date: "2025-05-05", price: 0.1707},
      {date: "2025-05-06", price: 0.1706},
      {date: "2025-05-07", price: 0.1723},
      {date: "2025-05-08", price: 0.1721},
      {date: "2025-05-09", price: 0.1972},
      {date: "2025-05-10", price: 0.2052},
      {date: "2025-05-11", price: 0.2481},
      {date: "2025-05-12", price: 0.2316},
      {date: "2025-05-13", price: 0.2314},
      {date: "2025-05-14", price: 0.2406},
      {date: "2025-05-15", price: 0.2327},
      {date: "2025-05-16", price: 0.2188},
      {date: "2025-05-17", price: 0.2226},
      {date: "2025-05-18", price: 0.2149},
      {date: "2025-05-19", price: 0.2306},
      {date: "2025-05-20", price: 0.2245},
      {date: "2025-05-21", price: 0.2263},
      {date: "2025-05-22", price: 0.2341},
      {date: "2025-05-23", price: 0.2449},
      {date: "2025-05-24", price: 0.2256},
      {date: "2025-05-25", price: 0.2253},
      {date: "2025-05-26", price: 0.2241},
      {date: "2025-05-27", price: 0.2257},
      {date: "2025-05-28", price: 0.2261},
      {date: "2025-05-29", price: 0.2211},
      {date: "2025-05-30", price: 0.2158}
    ]
  }
};

// Global chart variable
let priceChart = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  initializeTabs();
  initializeFilters();
  renderPolicyTimeline();
  renderNewsTimeline();
  initializeChart();
}

// Tab Navigation
function initializeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Remove active class from all tabs and panels
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding panel
      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      
      // Initialize chart when performance tab is clicked
      if (targetTab === 'performance' && !priceChart) {
        initializeChart();
      }
    });
  });
}

// Filters
function initializeFilters() {
  const policyFilter = document.getElementById('policyFilter');
  const newsFilter = document.getElementById('newsFilter');
  
  if (policyFilter) {
    policyFilter.addEventListener('change', (e) => {
      renderPolicyTimeline(e.target.value);
    });
  }
  
  if (newsFilter) {
    newsFilter.addEventListener('change', (e) => {
      renderNewsTimeline(e.target.value);
    });
  }
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Render Policy Timeline
function renderPolicyTimeline(filter = 'all') {
  const timeline = document.getElementById('policyTimeline');
  if (!timeline) return;
  
  let events = cryptoData.policy_events;
  
  // Filter events if needed
  if (filter !== 'all') {
    events = events.filter(event => 
      event.affected_coins.includes(filter)
    );
  }
  
  // Sort events by date (newest first)
  events.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  timeline.innerHTML = events.map(event => `
    <div class="timeline-item">
      <div class="timeline-date">${formatDate(event.date)}</div>
      <div class="timeline-title">${event.title}</div>
      <div class="timeline-category">${event.category}</div>
      <div class="timeline-impact ${event.impact.toLowerCase()}">${event.impact}</div>
      <div class="timeline-description">${event.description}</div>
      <div class="affected-coins">
        ${event.affected_coins.map(coin => `<span class="coin-tag">${coin}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Render News Timeline
function renderNewsTimeline(filter = 'all') {
  const timeline = document.getElementById('newsTimeline');
  if (!timeline) return;
  
  let events = cryptoData.news_events;
  
  // Filter events if needed
  if (filter !== 'all') {
    events = events.filter(event => event.category === filter);
  }
  
  // Sort events by date (newest first)
  events.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  timeline.innerHTML = events.map(event => `
    <div class="news-item">
      <div class="timeline-date">${formatDate(event.date)}</div>
      <div class="timeline-title">${event.title}</div>
      <div class="timeline-category">${event.category}</div>
      <div class="timeline-impact ${event.impact.toLowerCase()}">${event.impact}</div>
      <div class="timeline-description">${event.description}</div>
      <div class="affected-coins">
        ${event.affected_coins.map(coin => `<span class="coin-tag">${coin}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Initialize Price Chart
function initializeChart() {
  const ctx = document.getElementById('priceChart');
  if (!ctx || priceChart) return;
  
  // Prepare data for Chart.js
  const labels = cryptoData.may_price_data.Bitcoin.map(item => {
    const date = new Date(item.date);
    return date.getDate();
  });
  
  const datasets = [
    {
      label: 'Bitcoin (BTC)',
      data: cryptoData.may_price_data.Bitcoin.map(item => item.price),
      borderColor: '#f7931a',
      backgroundColor: 'rgba(247, 147, 26, 0.1)',
      borderWidth: 2,
      fill: false,
      tension: 0.4
    },
    {
      label: 'Ethereum (ETH)',
      data: cryptoData.may_price_data.Ethereum.map(item => item.price),
      borderColor: '#627eea',
      backgroundColor: 'rgba(98, 126, 234, 0.1)',
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      yAxisID: 'y1'
    },
    {
      label: 'Dogecoin (DOGE)',
      data: cryptoData.may_price_data.Dogecoin.map(item => item.price),
      borderColor: '#c2a633',
      backgroundColor: 'rgba(194, 166, 51, 0.1)',
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      yAxisID: 'y2'
    }
  ];
  
  const config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        title: {
          display: true,
          text: 'May 2025 Price Performance',
          color: '#f5f5f5',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(38, 40, 40, 0.9)',
          titleColor: '#f5f5f5',
          bodyColor: '#f5f5f5',
          borderColor: '#32b8c6',
          borderWidth: 1,
          callbacks: {
            title: function(context) {
              const date = new Date(2025, 4, context[0].label);
              return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              });
            },
            label: function(context) {
              const value = context.parsed.y;
              if (context.dataset.label === 'Dogecoin (DOGE)') {
                return `${context.dataset.label}: $${value.toFixed(4)}`;
              } else {
                return `${context.dataset.label}: $${value.toLocaleString()}`;
              }
            }
          }
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'May 2025 (Day)',
            color: '#a7a9a9'
          },
          ticks: {
            color: '#a7a9a9'
          },
          grid: {
            color: 'rgba(119, 124, 124, 0.2)'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Bitcoin Price (USD)',
            color: '#f7931a'
          },
          ticks: {
            color: '#f7931a',
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          },
          grid: {
            color: 'rgba(119, 124, 124, 0.2)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Ethereum Price (USD)',
            color: '#627eea'
          },
          ticks: {
            color: '#627eea',
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          },
          grid: {
            drawOnChartArea: false,
          },
        },
        y2: {
          type: 'linear',
          display: false,
          position: 'right',
        }
      }
    }
  };
  
  priceChart = new Chart(ctx, config);
}

// Add hover effects and tooltips
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to crypto cards
  const cryptoCards = document.querySelectorAll('.crypto-card');
  cryptoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-2px)';
    });
  });
  
  // Add click effects to buttons
  const buttons = document.querySelectorAll('.btn, .tab-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
});

// Utility function to format numbers
function formatNumber(num, decimals = 2) {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(decimals) + 'T';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(decimals) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(decimals) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(decimals) + 'K';
  }
  return num.toFixed(decimals);
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Performance optimization: Lazy load heavy content
const observerOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      
      // Load chart when performance section becomes visible
      if (target.id === 'performance' && !priceChart) {
        setTimeout(() => initializeChart(), 100);
      }
      
      observer.unobserve(target);
    }
  });
}, observerOptions);

// Observe tab panels for lazy loading
document.querySelectorAll('.tab-panel').forEach(panel => {
  observer.observe(panel);
});