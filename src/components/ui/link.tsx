type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export default Link;
