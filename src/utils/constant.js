export const apiURL = "https://leaderboard.lugvitc.net";

export const supabaseURL = "https://sgnyehjzsokydutugdtj.supabase.co";
export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnbnllaGp6c29reWR1dHVnZHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NTEwMTAsImV4cCI6MjAzODUyNzAxMH0.mjMnB-OIZ7KeLW4XKN9aLcCleAwSQ75QKBk210pagdA"

export const randomPhoto = () => {
  return (
    "https://api.dicebear.com/5.x/avataaars/svg?backgroundColor=03a9f4&seed=" +
    (Math.random() + 1).toString(10).substring(7)
  );
};
