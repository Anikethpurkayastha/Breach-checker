// Theme toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  });
  
  async function checkBreach() {
    const email = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');
    const loading = document.getElementById('loading');
    const exportButtons = document.getElementById('exportButtons');
    const chartCanvas = document.getElementById('breachChart');
  
    resultDiv.innerHTML = '';
    exportButtons.style.display = 'none';
    chartCanvas.style.display = 'none';
  
    if (!validateEmail(email)) {
      resultDiv.innerHTML = `<div class="alert alert-warning">Please enter a valid email address.</div>`;
      return;
    }
  
    loading.style.display = 'block';
  
    try {
      const response = await fetch('/check-breach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
  
      const data = await response.json();
      loading.style.display = 'none';
  
      if (data.entries && data.entries.length > 0) {
        let output = `
          <div class="alert alert-danger">
            <strong>${email}</strong> was found in <strong>${data.entries.length}</strong> breaches:
          </div>
          <ul class="list-group animate__animated animate__fadeIn">`;
  
        const chartData = {};
  
        data.entries.forEach(entry => {
          const db = entry.database || 'Unknown';
          chartData[db] = (chartData[db] || 0) + 1;
  
          output += `
            <li class="list-group-item">
              <strong>Database:</strong> ${db}<br>
              <strong>Username:</strong> ${entry.username || 'N/A'}<br>
              <strong>IP Address:</strong> ${entry.ip_address || 'N/A'}<br>
              <strong>Password:</strong> ${entry.password || 'Encrypted / Not available'}
            </li>`;
        });
  
        output += `</ul>`;
        resultDiv.innerHTML = output;
        exportButtons.style.display = 'block';
        renderChart(chartData);
      } else {
        resultDiv.innerHTML = `<div class="alert alert-success">Good news! <strong>${email}</strong> was NOT found in any breaches.</div>`;
      }
    } catch (error) {
      loading.style.display = 'none';
      resultDiv.innerHTML = `<div class="alert alert-danger">Error checking breach. Try again later.</div>`;
      console.error('Error:', error);
    }
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function renderChart(data) {
    const ctx = document.getElementById('breachChart');
    ctx.style.display = 'block';
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Breaches by Source',
          data: Object.values(data),
          backgroundColor: '#0d6efd',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      }
    });
  }
