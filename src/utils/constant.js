export const apiURL = "https://leaderboard.lugvitc.net";

export const randomPhoto = () => {
  return (
    "https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=03a9f4&seed=" +
    (Math.random() + 1).toString(10).substring(7)
  );
};
