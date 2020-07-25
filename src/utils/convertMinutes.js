module.exports = (totalMinutes) => {
  const hours = totalMinutes / 60;
  const minutes = totalMinutes % 60;
  return `${Math.floor(hours)}h ${minutes}m`;
};
