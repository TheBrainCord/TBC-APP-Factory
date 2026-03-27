import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

type Tone = 'primary' | 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps {
  label: string;
  tone?: Tone;
}

const toneColors: Record<Tone, { bg: string; text: string }> = {
  primary: { bg: colors.primaryDark, text: colors.primaryLight },
  success: { bg: '#1a3d2b', text: colors.success },
  warning: { bg: '#3d2e0a', text: colors.warning },
  error: { bg: '#3d1010', text: colors.error },
  neutral: { bg: colors.surface, text: colors.textMuted },
};

export function Badge({ label, tone = 'neutral' }: BadgeProps) {
  const { bg, text } = toneColors[tone];
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.label, { color: text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs - 1,
    borderRadius: radius.full,
    alignSelf: 'flex-start',
  },
  label: {
    ...typography.caption,
    fontWeight: '600',
  },
});
