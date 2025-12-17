<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flawless Executor</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="bg" aria-hidden="true"></div>

    <main class="wrap">
      <header class="hero">
        <span class="badge">Purple Theme • Clean • Fast</span>
        <h1 class="title">Flawless <span>Executor</span></h1>
        <p class="subtitle">
          Minimal, modern, and unapologetically purple.
        </p>

        <div class="actions">
          <button class="btn primary" id="copyBtn">Copy Name</button>
          <a class="btn ghost" href="#about">Learn more</a>
        </div>
      </header>

      <section id="about" class="card">
        <h2>About</h2>
        <p>
          This is a simple static website you can deploy on Vercel. Edit the text,
          colors, and buttons however you like.
        </p>

        <div class="stats">
          <div class="stat">
            <div class="statNum" id="visits">1</div>
            <div class="statLabel">Vibes</div>
          </div>
          <div class="stat">
            <div class="statNum">∞</div>
            <div class="statLabel">Potential</div>
          </div>
          <div class="stat">
            <div class="statNum">0ms</div>
            <div class="statLabel">Lag (aspirational)</div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <span>© <span id="year"></span> Flawless Executor</span>
      </footer>
    </main>

    <script src="./script.js" defer></script>
  </body>
</html>
