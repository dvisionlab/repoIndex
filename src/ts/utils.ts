export const savePreferences = function (preferences: object): void {
  if (!getFromLocalStorage("repoIndex")) {
    setInLocalStorage("repoIndex", {});
  }
  setInLocalStorage("repoIndex", preferences);
};

const getFromLocalStorage = function (key: string): object | null {
  const preferencesStr: string | null = localStorage.getItem(key);
  const preferences: object | null = preferencesStr
    ? JSON.parse(preferencesStr)
    : null;
  return preferences;
};

const setInLocalStorage = function (key: string, payload: object): void {
  console.log("payload", payload);
  localStorage.setItem("repoIndex", JSON.stringify(payload));
  return;
};
