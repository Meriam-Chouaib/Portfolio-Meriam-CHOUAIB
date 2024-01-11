import { ReactNode } from 'react';
import LinkObject from 'types/interfaces/LinkObject';

export interface FormsGroupProps {
  title?: string;
  titleTip?: string;
  onSubmit?: (data: unknown, error: unknown) => void;
  onEnable?: () => void;
  descriptions?: string[];
  action?: string;
  link?: LinkObject;

  children: ReactNode;
  withNoDivider?: boolean;
}
