import GenericForm, { formTypes } from './GenericForm';
import { InterrogativeType } from './InterrogativeForm';

export interface FilesForm extends GenericForm<FilesType, FilesType, InterrogativeType> {
  type: formTypes.FILES_UPLOAD;
  options?: string[];
  config?: FileConfig;
}

export type FilesType = File[] | [];

export type FileConfig = {
  maxSize?: number;
  accept?: string[];
};
