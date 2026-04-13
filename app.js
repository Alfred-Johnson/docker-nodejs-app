const http = require('http');

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Sports Hub</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #0f172a;
        color: white;
      }
      header {
        background: #1e293b;
        padding: 20px;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        color: #38bdf8;
      }
      .container {
        padding: 20px;
      }
      .card {
        background: #1e293b;
        padding: 15px;
        margin: 10px 0;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      .card h2 {
        color: #38bdf8;
      }
    </style>
  </head>
  <body>
    <header>⚽ Sports Hub - CI/CD Live 🚀</header>
    <div class="container">
      <div class="card">
        <h2>Football</h2>
        <p>Latest football news and updates.</p>
      </div>
      <div class="card">
        <h2>Cricket</h2>
        <p>Live scores and match highlights.</p>
      </div>
      <div class="card">
        <h2>Basketball</h2>
        <p>Top NBA games and player stats.</p>
      </div>
    </div>
  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
