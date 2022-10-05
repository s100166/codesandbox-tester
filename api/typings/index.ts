export type Status = 200 | 404 | 403;

export type Currency = {
  code: string;
  name: string;
};

export type API = {
  status: Status;
  data: Currency;
};
