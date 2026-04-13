const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
res.send("CI/CD SUCCESS 🚀 Alfred DevOps Project");
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
        padding: 20px;
        margin: 15px 0;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
      }
      .card h2 {
        margin: 0 0 10px;
        color: #facc15;
      }
      .footer {
        text-align: center;
        padding: 15px;
        background: #1e293b;
        margin-top: 20px;
        color: #94a3b8;
      }
      .btn {
        display: inline-block;
        padding: 10px 15px;
        background: #38bdf8;
        color: black;
        border-radius: 5px;
        text-decoration: none;
        margin-top: 10px;
      }
    </style>
  </head>

  <body>
    <header>🏆 Sports Hub Live</header>

    <div class="container">
      <div class="card">
        <h2>⚽ Football</h2>
        <p>Latest updates from international football leagues.</p>
        <a href="#" class="btn">View More</a>
      </div>

      <div class="card">
        <h2>🏏 Cricket</h2>
        <p>Live scores, match highlights and player stats.</p>
        <a href="#" class="btn">View More</a>
      </div>

      <div class="card">
        <h2>🏀 Basketball</h2>
        <p>NBA news, scores and trending players.</p>
        <a href="#" class="btn">View More</a>
      </div>
    </div>

    <div class="footer">
      🚀 Deployed using Docker + Nginx + AWS EC2
    </div>
  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
