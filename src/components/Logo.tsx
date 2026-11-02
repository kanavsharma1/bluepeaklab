export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <path d="M3 28 L13 10 L19 20 L23 14 L31 28 Z" fill="#1E3A5F" />
      <path d="M13 10 L16 15.4 L13 14 L10.6 15.4 Z" fill="#A8C5DA" />
    </svg>
  );
}
