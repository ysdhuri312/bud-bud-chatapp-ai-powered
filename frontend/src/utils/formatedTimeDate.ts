export default function formatedTime(timestamp: Date) {
  const date = new Date(timestamp);
  const formatedTime = date.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return formatedTime;
}
