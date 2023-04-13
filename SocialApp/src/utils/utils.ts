export const getTimeElapsed = (_seconds: number, _nanoseconds: number) => {
  const eventTime = new Date(
    _seconds * 1000 + Math.round(_nanoseconds / 1000000),
  );
  const currentTime = new Date();
  const elapsedMilliseconds = currentTime.getTime() - eventTime.getTime();

  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;

  const days = Math.floor(elapsedMilliseconds / millisecondsPerDay);
  const hours = Math.floor(
    (elapsedMilliseconds % millisecondsPerDay) / millisecondsPerHour,
  );
  const minutes = Math.floor(
    (elapsedMilliseconds % millisecondsPerHour) / millisecondsPerMinute,
  );
  const seconds = Math.floor(
    (elapsedMilliseconds % millisecondsPerMinute) / millisecondsPerSecond,
  );

  const parts = [];
  if (days) {
    parts.push(`${days} дней`);
  }
  if (hours) {
    parts.push(`${hours} часов`);
  }
  if (minutes) {
    parts.push(`${minutes} минут`);
  }
  if (seconds) {
    parts.push(`${seconds} секунд`);
  }

  return `Прошло ${parts.join(', ')}`;
};
