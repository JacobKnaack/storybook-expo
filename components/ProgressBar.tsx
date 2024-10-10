import { View, StyleSheet, Pressable } from 'react-native';

interface ProgressBarProps {
  progress: number;
  color?: string;
  handlePress?: () => void;
}

export default function ProgressBar({ progress, color, handlePress }: ProgressBarProps) {

  const dynamicStyle = StyleSheet.create({
    progress: {
      width: `${progress}%`,
      backgroundColor: color || '#000'
    }
  });

  return (

    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={[styles.progress, dynamicStyle.progress]}></View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#efefef'
  },
  progress: {
    height: '100%',
  }
})