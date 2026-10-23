import { useEffect, useRef, useState } from "react";
import "./side-panel.css";

const EXIT_FALLBACK_MS = 800;

// Right-side panel on tablet/desktop, bottom sheet on mobile (see side-panel.css).
const SidePanel = ({ open, onClose, title, icon, closeLabel, children }) => {
  const closeRef = useRef(null);
  // Stay mounted after `open` turns false until the exit animation ends.
  const [mounted, setMounted] = useState(open);
  if (open && !mounted) setMounted(true);
  const closing = mounted && !open;

  useEffect(() => {
    if (!open) return undefined;
    const opener = document.activeElement;
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    const { overflow } = document.body.style;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      opener?.focus?.();
    };
  }, [open, onClose]);

  // Safety net in case `animationend` never fires (e.g. the tab is hidden).
  useEffect(() => {
    if (!closing) return undefined;
    const timer = setTimeout(() => setMounted(false), EXIT_FALLBACK_MS);
    return () => clearTimeout(timer);
  }, [closing]);

  if (!mounted) return null;

  return (
    <div
      className={`side-panel__backdrop${closing ? " is-closing" : ""}`}
      onClick={onClose}
    >
      <div
        className={`side-panel${closing ? " is-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        onAnimationEnd={(event) => {
          if (closing && event.target === event.currentTarget) setMounted(false);
        }}
      >
        <header className="side-panel__header">
          <h3 className="side-panel__title">
            {icon && <i className={`bx ${icon} side-panel__icon`} aria-hidden="true"></i>}
            {title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            className="side-panel__close"
            aria-label={closeLabel}
            onClick={onClose}
          >
            <i className="bx bx-x" aria-hidden="true"></i>
          </button>
        </header>
        <div className="side-panel__body">{children}</div>
      </div>
    </div>
  );
};

export default SidePanel;
