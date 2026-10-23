import { buildPath } from "./paths";
import { useLocale } from "./LocaleContext";
import { useRoute } from "./RouteContext";

// Internal link that keeps the current locale prefix and navigates without a page reload.
const Link = ({ to, children, onClick, ...props }) => {
  const { locale } = useLocale();
  const { navigate } = useRoute();
  const href = buildPath(locale, to);

  const handleClick = (event) => {
    onClick?.(event);
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.defaultPrevented || event.button !== 0 || modified) return;
    event.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;
