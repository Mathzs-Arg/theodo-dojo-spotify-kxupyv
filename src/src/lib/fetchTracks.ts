const apiToken = 'BQCrrgCux5qlMbyybkSO7cRySx19GIwzWEn5OONCrbRjkdYqj3Lrb1NhYBUWg6vHPnDHLLSii41Jbr2cPEyW3Ifxl6yI05OgfDND31nMKCutgIAJnj11byp6DYLPlYICzkFHiDz5Yqqe0gZcj2GfxDo87fSzbTtlXE56MyHFOFFkQquNOiQlVeLOYbGLpFVYpXOnFI2eO3FAXtK7i4Vgu_NhdNiIxw';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};