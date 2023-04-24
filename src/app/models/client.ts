export interface Client {
  id: number;
  name: string;
  data: Data[];
}

export interface Data {
  id: number;
  clientId: number;
  variable: string;
  value: string;
}

export interface ClientCreateDTO extends Omit<Client, 'id' | 'data'> {}

export interface ClientUpdateDTO extends Omit<Client, 'data'> {}

export interface DataDTO extends Omit<Data, 'id'> {}

export interface DataUpdateDTO extends Omit<Data, 'id' | 'clientId'> {}

export interface ClientRes {
  data: Client[];
}
