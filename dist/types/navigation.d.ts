export interface NavItem {
    title: string;
    to: string | Record<string, any>;
    icon?: string;
}
export interface SocialItem {
    icon: string;
    link: string;
    label: string;
}
export interface NavItemNavbar {
    label: string;
    to: string | Record<string, any>;
    icon?: string;
}
