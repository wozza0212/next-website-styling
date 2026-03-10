export interface HeaderTabProps {
  title: string;
  href: string;
}

const HeaderTab = ({ title, href }: HeaderTabProps) => {
  return <li><a href={href}>{title}</a></li>;
};
export default HeaderTab;
