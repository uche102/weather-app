document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = document.getElementById("city").value.trim();
  if (!q) return;
  const resDiv = document.getElementById("result");
  resDiv.innerHTML = '<div class="loading" aria-hidden="true"></div>';
  try {
    const r = await fetch(`/api/weather?city=${encodeURIComponent(q)}`);
    if (!r.ok) {
      const err = await r.json().catch(() => ({ message: r.statusText }));
      resDiv.innerHTML = `<div class="error">Error: ${err.message || r.statusText}</div>`;
      return;
    }
    const d = await r.json();
    const w = d.weather && d.weather[0];
    resDiv.innerHTML = `
      <article class="weather-card" role="region" aria-label="Weather for ${d.name}">
        <div class="weather-icon">
          ${w ? `<img src="https://openweathermap.org/img/wn/${w.icon}@2x.png" alt="${w.description}" />` : ""}
        </div>
        <div class="weather-main">
          <div class="location">${d.name}${d.sys?.country ? ", " + d.sys.country : ""}</div>
          <div class="temp">${Math.round(d.main.temp)}°C</div>
          ${w ? `<div class="desc">${w.description}</div>` : ""}
          <div class="extra">
            <div>Feels like: ${Math.round(d.main.feels_like)}°C</div>
            <div>Humidity: ${d.main.humidity}%</div>
            <div>Wind: ${d.wind?.speed ?? "—"} m/s</div>
          </div>
        </div>
      </article>
    `;
  } catch (err) {
    resDiv.innerHTML = '<div class="error">Network error</div>';
  }
});
