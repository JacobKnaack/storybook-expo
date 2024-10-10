import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Meta, StoryObj} from '@storybook/react';
import ProgressBar from '../../../components/ProgressBar';

const storyStyles = StyleSheet.create({
  header: {
    marginVertical: 20,
    fontSize: 24,
  }
})

const meta = {
  title: 'ProgressBar',
  component: ProgressBar,
  args: {
    progress: 90,
    color: 'red',
    handlePress: () => {
      console.log('PROGRESS BAR PRESSED!');
    }
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Text style={storyStyles.header}>Progress Bars</Text>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const BackgroundColor: Story = {};
