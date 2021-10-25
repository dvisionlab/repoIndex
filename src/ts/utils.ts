import { item, payload, repository } from "@/ts/types";
import { Octokit } from "octokit";
import { createTokenAuth } from "@octokit/auth-token";

export const savePreferences = function (items: item[] | {}): void {
  if (!getFromLocalStorage("repoIndex")) {
    setInLocalStorage("repoIndex", {});
  }

  if (Array.isArray(items)) {
    const preferences = items.map(i => ({
      id: i.id,
      active: i.active
    }));

    setInLocalStorage("repoIndex", preferences);
  }
};

export const loadPreferences = function (items: item[]): item[] {
  const preferences = getFromLocalStorage("repoIndex");

  if (preferences) {
    items = items.map(it => {
      const saved = preferences.find(p => p.id == it.id);
      it.active = saved ? saved.active : false;
      return it;
    });
  }

  return items;
};

const getFromLocalStorage = function (key: string): item[] | null {
  const preferencesStr: string | null = localStorage.getItem(key);
  const preferences: item[] | null = preferencesStr
    ? JSON.parse(preferencesStr)
    : null;
  return preferences;
};

const setInLocalStorage = function (key: string, payload: payload): void {
  if (Array.isArray(payload)) {
    console.log(
      "payload",
      payload.map(p => p.active)
    );
  }
  localStorage.setItem("repoIndex", JSON.stringify(payload));
  return;
};

export async function getGroupedRepos() {
  const org = "dvisionlab";
  const key = localStorage.getItem("githubKey");

  if (key) {
    const auth = createTokenAuth(key);
    // const { token } = await auth();
    await auth();
  }

  const octokit = new Octokit({
    userAgent: "prova/v1",
    auth: key
  });

  const response = await octokit.rest.repos.listForOrg({
    org
  });

  const repos: repository[] = response.data.map((repo: any): repository => {
    repo.icon = "mdi-file-outline";
    repo.group = repo.private ? "Private Projects" : "Open Source Libraries";
    return repo;
  });

  console.log(repos);

  // lodash-free version of groupBy
  const grouped = repos.reduce(
    (r, v, i, a, k = v.group) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );
  console.log(grouped);

  let i = 0;
  const items: item[] = [];

  for (const groupId in grouped) {
    const newItem: item = {
      id: ++i,
      group: groupId,
      repos: grouped[groupId],
      active: false
    };

    items.push(newItem);

    console.log(newItem);
  }

  return items;
}
