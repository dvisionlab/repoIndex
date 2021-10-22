export interface repository {
  id: number;
  name: string;
  icon: string;
  group: string;
}

export interface item {
  id: number;
  active: boolean;
  repos: object[];
  group: string;
}
