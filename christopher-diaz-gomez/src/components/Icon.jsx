const icons = {
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'bar-chart-3': ['M3 3v18h18', 'M18 17V9', 'M13 17V5', 'M8 17v-3'],
  book: ['M4 19.5A2.5 2.5 0 0 1 6.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z'],
  'book-marked': ['M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z', 'M9 3v7l3-2 3 2V3'],
  'book-open': ['M12 7v14', 'M3 18V5a2 2 0 0 1 2-2h2a5 5 0 0 1 5 5 5 5 0 0 1 5-5h2a2 2 0 0 1 2 2v13', 'M3 18a2 2 0 0 0 2 2h2a5 5 0 0 1 5 1 5 5 0 0 1 5-1h2a2 2 0 0 0 2-2'],
  box: ['M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z', 'm3.3 7 8.7 5 8.7-5', 'M12 22V12'],
  calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z'],
  clock: ['M12 8v4l3 2', 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'],
  'file-text': ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z', 'M14 2v6h6', 'M8 13h8', 'M8 17h8', 'M8 9h2'],
  grid: ['M3 3h8v8H3z', 'M13 3h8v8h-8z', 'M13 13h8v8h-8z', 'M3 13h8v8H3z'],
  home: ['m3 10 9-7 9 7', 'M5 9v12h14V9', 'M9 21v-8h6v8'],
  landmark: ['M3 21h18', 'M5 21V7l7-4 7 4v14', 'M9 21v-4h6v4', 'M9 9h.01', 'M15 9h.01', 'M9 13h.01', 'M15 13h.01'],
  layers: ['m12 2 9 5-9 5-9-5 9-5Z', 'm3 12 9 5 9-5', 'm3 17 9 5 9-5'],
  'layout-grid': ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'],
  mail: ['m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'],
  'map-pin': ['M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z', 'M12 10a2 2 0 1 0 0 .01'],
  moon: ['M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z'],
  phone: ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z'],
  search: ['m21 21-4.34-4.34', 'M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z'],
  send: ['m22 2-7 20-4-9-9-4Z', 'M22 2 11 13'],
  sliders: ['M4 21v-7', 'M4 10V3', 'M12 21v-9', 'M12 8V3', 'M20 21v-5', 'M20 12V3', 'M2 14h4', 'M10 8h4', 'M18 16h4'],
  star: ['m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z'],
  tag: ['m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z', 'M7 7h.01'],
  type: ['M4 7V4h16v3', 'M9 20h6', 'M12 4v16'],
};

export default function Icon({ name, className = '' }) {
  const paths = icons[name];

  if (!paths) {
    throw new Error(`Icono no configurado: ${name}`);
  }

  return (
    <svg
      aria-hidden="true"
      className={`icon-svg ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((path, index) => <path key={index} d={path} />)}
    </svg>
  );
}
