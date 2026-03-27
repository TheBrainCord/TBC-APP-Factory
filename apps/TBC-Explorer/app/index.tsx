import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, colors, spacing } from '@tbc/ui';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="h1" style={styles.title}>TBC Explorer</Text>
      <Text variant="body" muted style={styles.subtitle}>
        Discover. Connect. Explore.
      </Text>

      <Card elevated style={styles.card}>
        <Text variant="h3">What are you looking for?</Text>
        <Text variant="body" muted style={styles.cardBody}>
          Browse services, businesses, and opportunities near you.
        </Text>
        <Button label="Start Exploring" fullWidth style={styles.button} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    marginBottom: spacing.xl,
  },
  card: {
    gap: spacing.sm,
  },
  cardBody: {
    marginBottom: spacing.sm,
  },
  button: {
    marginTop: spacing.xs,
  },
});
