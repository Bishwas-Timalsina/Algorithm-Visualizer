export interface NavItem {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}
