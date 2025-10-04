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
}
export interface IStackControlProps {
  onPush: () => void;
  onPop: () => void;
  onReset: () => void;
  inputValue: string;
  setInputValue?: any;
}

export interface IStackViewProps {
  stack: any;
}
