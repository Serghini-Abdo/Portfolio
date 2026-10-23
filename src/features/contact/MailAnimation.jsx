const FLIGHT_PATH = "M66 112 C80 40 150 10 185 45 C215 78 170 118 148 88 C128 60 190 14 285 26";

const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const MailAnimation = () => {
  const still = prefersReducedMotion();

  return (
    <svg className="contact__mail" viewBox="0 0 300 190" aria-hidden="true" focusable="false">
      <path className="contact__mail-trail" d={FLIGHT_PATH} pathLength="100">
        {!still && (
          <>
            <animate
              attributeName="stroke-dasharray"
              dur="4s"
              repeatCount="indefinite"
              values="0 100;100 0;100 0"
              keyTimes="0;0.75;1"
            />
            <animate
              attributeName="opacity"
              dur="4s"
              repeatCount="indefinite"
              values="0.8;0.8;0;0"
              keyTimes="0;0.75;0.85;1"
            />
          </>
        )}
      </path>
      <rect className="contact__mail-skeleton" x="18" y="112" width="96" height="62" rx="10" />
      <g className="contact__mail-envelope">
        <rect x="18" y="112" width="96" height="62" rx="10" />
        <path d="M20 124 L66 156 L112 124" />
      </g>
      <g className="contact__mail-plane" transform={still ? "translate(250 24) rotate(-12)" : undefined}>
        <polygon points="-13,-10 15,0 -13,10 -7,0" />
        <path d="M-7 0 L15 0" />
        {!still && (
          <>
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              rotate="auto"
              path={FLIGHT_PATH}
              calcMode="linear"
              keyPoints="0;1;1"
              keyTimes="0;0.75;1"
            />
            <animate
              attributeName="opacity"
              dur="4s"
              repeatCount="indefinite"
              values="0;1;1;0;0"
              keyTimes="0;0.06;0.72;0.8;1"
            />
          </>
        )}
      </g>
    </svg>
  );
};

export default MailAnimation;
