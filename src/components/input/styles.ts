import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  group: {
    width: '100%',
    minHeight: 48,
    maxHeight: 200,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 20,
  },
  icon: {
    height: 36,
    width: 36,
    margin: 4,
    paddingRight: 2,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRightWidth: 3,
    borderRightColor: '#f4f5f6',
  },
  textInput: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16,
  },
});
