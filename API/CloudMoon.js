async function loadCloudMoonUrls() {
  const urlList = document.getElementById('url-list');
  try {
    const response = await fetch('/Spectra/API/CloudMoon.json');
    if (!response.ok) {
      urlList.innerHTML = '<li class="loading">No API Urls are available, bum</li>';
      return;
    }
    const data = await response.json();
    const urls = data.CloudMoonAPIURLS || [];
    
    if (urls.length === 0) {
      urlList.innerHTML = '<li class="loading">No API Urls are available, bum</li>';
      return;
    }
    urlList.innerHTML = urls.map(url => 
      `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a></li>`
    ).join('');
  } catch (error) {
    console.error(error);
    urlList.innerHTML = '<li class="loading">Failed. ): so sad</li>';
  }
}
loadCloudMoonUrls();
