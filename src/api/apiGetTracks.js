const apiAddress = 'https://skypro-music-api.skyeng.tech';

export async function addLike({ token, id }) {
  const response = await fetch(`${apiAddress}/catalog/track/${id}/favorite/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) throw new Error('Токен протух');
  return await response.json();
}

export async function disLike({ token, id }) {
  const response = await fetch(`${apiAddress}/catalog/track/${id}/favorite/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 401) throw new Error('Токен протух');
  return await response.json();
}
