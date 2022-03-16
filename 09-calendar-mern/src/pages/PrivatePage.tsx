export const PrivatePage = () => {
  return (
    <div>
      <h2>PrivatePage Zone</h2>

      <h4>Your ApiKey {import.meta.env.VITE_URL_PRIVATE_KEY}</h4>
    </div>
  );
};
