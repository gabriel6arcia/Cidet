export interface Municipality {
  id: number;
  name: string;
  departmentId: number;
  danecode: string;
  isCapital: boolean;
}

export interface Department {
  id: number;
  name: string;
}

export interface MuniCreateDTO extends Omit<Municipality, 'id'> {}

export interface MuniRes {
  data: Municipality[];
}

export interface DepartmentRes {
  data: Department[];
}
