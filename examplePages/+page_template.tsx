import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <ThemedView style={styles.fullPage}>
            <SafeAreaView>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Welcome!</ThemedText>
                </ThemedView>
                <ThemedView style={styles.body}>
                    <ThemedText type="subtitle">Step 1: Try it</ThemedText>
                </ThemedView>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    fullPage: {
        flex: 1
    },
    content: {

    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    body: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
