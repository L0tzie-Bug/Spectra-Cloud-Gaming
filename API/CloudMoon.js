async function loadCloudMoonUrls() {
  try {
    const response = await fetch('/Spectra/API/CloudMoon.json');
    if (!response.ok) {
      window.cloudMoonUrls = [];
      return;
    }
    const data = await response.json();
    window.cloudMoonUrls = data.CloudMoonAPIURLS || [];
  } catch (error) {
    window.cloudMoonUrls = [];
  }
}

loadCloudMoonUrls();
