export const Timeline = () => {
  return (
    <div className="timeline">
      {Array.from({ length: 24 }, (_, hour) => (
        <div key={hour} className="timeline-hour">
          {hour < 10 ? `0${hour}:00` : `${hour}:00`}
        </div>
      ))}
    </div>
  );
};
