export const CalendarEvent = ({ event }: any) => {
  const { title, user } = event;

  return (
    <div>
      <strong>{title}</strong>
      {user && <strong>- {user.name}</strong>}
    </div>
  );
};
