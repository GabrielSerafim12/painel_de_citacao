import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
        "Porque mandaram o pupilo, eu não sei, antes de ler a biblia, leia uma versiculo, antes de pensar no bom, vejo o ridiculo e antes de tocar Jesus abrace dicipulo"
      </Text>
      <Image
      source={{ uri: 'https://th.bing.com/th/id/R.b0af69401a7c553c9b1f4a1f815a8995?rik=0S%2fNlUatvzXfDQ&pid=ImgRaw&r=0'}}
      style={styles.authorImage}
      />
      <Text style={styles.authorName}>- Barreto </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',

  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
});