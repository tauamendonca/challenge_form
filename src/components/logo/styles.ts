import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#604099',
    fontWeight: 700,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#604099',
    marginBottom: 16,
    alignSelf: 'center',
  },
});

export const layout = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 180,
    borderWidth: 4,
    elevation: 4,
    borderColor: '#604099',

  },
  container: {
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    width: 200,
  }
  
});