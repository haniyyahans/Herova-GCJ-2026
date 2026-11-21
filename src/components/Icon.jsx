function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.2 4.2" /></>,
    user: <><circle cx="12" cy="8" r="3.2" /><path d="M5.5 19c.8-3.1 3.1-4.7 6.5-4.7s5.7 1.6 6.5 4.7" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    key: <><circle cx="8.5" cy="15.5" r="3.5" /><path d="m11.5 13 7-7M16 6l2 2M14.5 8l2 2" /></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

export default Icon
