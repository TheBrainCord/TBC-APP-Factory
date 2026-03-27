import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, spacing } from '../theme';

interface DividerProps {
  vertical?: boolean;
  spacing?: keyof typeof import('../theme').spacing;
}

export function Divider({ vertical = false, spacing: gap = 'md' }: DividerProps) {
  return (
    <View
      style={[
        styles.base,
        vertical ? styles.vertical : styles.horizontal,
        { marginVertical: vertical ? 0 : spacing[gap], marginHorizontal: vertical ? spacing[gap] : 0 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.border,
  },
  horizontal: {
    height: 1,
    width: '100%',
  },
  vertical: {
    width: 1,
    alignSelf: 'stretch',
  },
});
