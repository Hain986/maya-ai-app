import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const messages = [
  { sender: 'Maya', text: 'Hey, I am Maya. Ready to help with your ideas?' },
  { sender: 'You', text: 'Let’s build an AI app together.' },
  { sender: 'Maya', text: 'Excellent. We can design the workflow, voice, and app experience.' }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.title}>Maya AI</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </View>

      <View style={styles.avatarCard}>
        <View style={styles.avatarGlow} />
        <View style={styles.avatarFace}>
          <View style={styles.eyeRow}>
            <View style={styles.eye} />
            <View style={styles.eye} />
          </View>
          <View style={styles.smile} />
        </View>
      </View>

      <View style={styles.chatPanel}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={message.sender === 'You' ? styles.bubbleYou : styles.bubbleMaya}
          >
            <Text style={styles.sender}>{message.sender}</Text>
            <Text style={styles.message}>{message.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#9eaed9"
        />
        <Pressable style={styles.sendButton}>
          <Text style={styles.buttonText}>Send</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050816',
    paddingHorizontal: 18,
    paddingTop: 24
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },
  title: {
    color: '#edf5ff',
    fontSize: 30,
    fontWeight: '800'
  },
  button: {
    backgroundColor: '#7d7dff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  },
  avatarCard: {
    height: 220,
    backgroundColor: '#0d1326',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20
  },
  avatarGlow: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: 'rgba(143, 152, 255, 0.25)',
    position: 'absolute'
  },
  avatarFace: {
    width: 120,
    height: 120,
    backgroundColor: '#f3d7c6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  eyeRow: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  eye: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#1d2438'
  },
  smile: {
    width: 30,
    height: 14,
    borderBottomWidth: 3,
    borderBottomColor: '#f59bb0',
    borderRadius: 18
  },
  chatPanel: {
    flex: 1,
    gap: 10
  },
  bubbleMaya: {
    maxWidth: '80%',
    backgroundColor: 'rgba(148, 161, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(148, 161, 255, 0.18)',
    borderRadius: 16,
    padding: 12
  },
  bubbleYou: {
    maxWidth: '80%',
    backgroundColor: 'rgba(98, 211, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(98, 211, 255, 0.18)',
    borderRadius: 16,
    padding: 12,
    alignSelf: 'flex-end'
  },
  sender: {
    color: '#b9c7f6',
    fontSize: 11,
    marginBottom: 4,
    textTransform: 'uppercase'
  },
  message: {
    color: '#edf5ff',
    fontSize: 15
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
    marginBottom: 18
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderColor: 'rgba(255,255,255,0.09)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#edf5ff'
  },
  sendButton: {
    backgroundColor: '#62d3ff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center'
  }
});
