export interface NavItem {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface ITextProps {
  content?: string;
  size?: string;
  weight?: string;
  lineHeight?: string;
  className?: string;
}
export interface IButtonProps {
  onClick?: () => void;
  label?: string;
  style?: any;
  className: string;
  disabled?: boolean;
}
export interface IStackControlProps {
  onPush: () => void;
  onPop: () => void;
  onReset: () => void;
  inputValue: string;
  setInputValue?: any;
}
export interface IQueueControlProps {
  onEnQueue: () => void;
  onDeQueue: () => void;
  onReset: () => void;
  inputValue: string;
  setInputValue?: any;
}

export interface IStackViewProps {
  stack: any;
}
export interface IQueueViewProps {
  queue: any;
}
export interface IHeaderType {
  content: any;
  title: string;
}
export interface ICircularQueueControlProps {
  onEnQueue: () => void;
  onDeQueue: () => void;
  onReset: () => void;
  inputValue: string;
  setInputValue: (val: string) => void;
  isFull: boolean;
  isEmpty: boolean;
}
export interface ICircularQueueViewProps {
  queue: (number | null)[];
  front: number;
  rear: number;
  maxSize: number;
}
