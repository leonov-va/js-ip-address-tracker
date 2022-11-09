export async function getAddress(ip = "8.8.8.8") {
  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_sJbqOseLYNKBnlyzCGnMnqtl9W8w9&ipAddress=${ip}`
  );

  return await response.json();
}
