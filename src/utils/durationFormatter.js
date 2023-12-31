export const durationFormatter = (duration_in_seconds) => {
  const minutes = Math.floor(duration_in_seconds / 60);
  const seconds = Math.floor(duration_in_seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};
