export const colors = {
  primary: '#6C3CE1',
  primaryLight: '#9B6EF3',
  primaryDark: '#4A1FA8',
  secondary: '#F5A623',
  background: '#0D0D0D',
  surface: '#1A1A2E',
  surfaceAlt: '#16213E',
  text: '#FFFFFF',
  textMuted: '#A0A0B0',
  border: '#2A2A4A',
  success: '#2ECC71',
  error: '#E74C3C',
  warning: '#F39C12',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
  full: 9999,
} as const;

export const typography = {
  h1: { fontSize: 32, fontWeight: '700' as const, letterSpacing: -0.5 },
  h2: { fontSize: 24, fontWeight: '700' as const },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
  caption: { fontSize: 13, fontWeight: '400' as const },
  label: { fontSize: 14, fontWeight: '600' as const },
} as const;
