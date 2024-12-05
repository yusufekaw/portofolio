// Membaca file JSON
fetch('asset/json/web.json')
.then(response => response.json())
.then(data => {
  const content = document.getElementById('web');
  data.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-sm-4';

    col.innerHTML = `
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.description}">
        <div class="card-body">
          <h5 class="card-title">${item.project}</h5>
          <p class="card-text"><b>Kategori</b> ${item.category}</p>
          <p class="card-text"><b>Tool</b> ${item.tools}</p>
          <p class="card-text">${item.description}</p>
          <a href="${item.url}" target="_blank" class="btn btn-outline-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Demo</a>
        </div>
      </div>
    `;

    content.appendChild(col);
  });
})
.catch(error => console.error('Error fetching JSON:', error));