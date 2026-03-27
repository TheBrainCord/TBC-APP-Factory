import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, colors, spacing } from '@tbc/ui';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="h1" style={styles.title}>K-Delivery</Text>
      <Text variant="body" muted style={styles.subtitle}>
        Fast. Reliable. Delivered.
      </Text>

      <Card elevated style={styles.card}>
        <Text variant="h3">Ready to deliver?</Text>
        <Text variant="body" muted style={styles.cardBody}>
          Start accepting delivery requests and earn today.
        </Text>
        <Button label="Get Started" fullWidth style={styles.button} />
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
