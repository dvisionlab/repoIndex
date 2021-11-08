export interface repository {
  id: number;
  name: string;
  icon: string;
  group: string;
  tag: string;
}

export interface item {
  id: number;
  active: boolean;
  repos: object[];
  group: string;
  icon: string;
}

export type payload = item[] | {};
