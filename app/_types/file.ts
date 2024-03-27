export type FileInfo = {
  file: File[];
  entityId: number;
  entityType: string;
};

type File = {
  seq: number;
  keyName: string;
  path: string;
};
