/**
 * TBC-AppName — Home Screen
 * Replace this file with your app's main screen.
 * All UI components, theme tokens, hooks, and services are available from @tbc/* packages.
 */
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, colors, spacing } from '@tbc/ui';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="h1">TBC AppName</Text>
      <Text variant="body" muted style={styles.subtitle}>
        Your app tagline here.
      </Text>
      <Card elevated>
        <Text variant="h3">Ready to build?</Text>
        <Text variant="body" muted>Add your screens and logic here.</Text>
        <Button label="Get Started" fullWidth style={styles.btn} onPress={() => {}} />
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
    gap: spacing.md,
  },
  subtitle: {
    marginBottom: spacing.md,
  },
  btn: {
    marginTop: spacing.sm,
  },
});
