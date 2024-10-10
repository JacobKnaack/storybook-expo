import React from 'react';
import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';
import MultipartForm from '../../../components/MultipartForm';

const meta = {
  title: 'Forms',
  component: MultipartForm,
  args: {
    questions: [
      'What are some numbers between 1 and 10?',
      'What is your favorite color?'
    ],
    onSubmit: (responses) => {
      console.log('questions responses: ', responses);
    }
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 25, marginVertical: 20 }}>Forms</Text>
        <Story />
      </View>
    )
  ]
} satisfies Meta<typeof MultipartForm>;

export default meta;

type Story = StoryObj<typeof meta>;
export const MultipleQuestions: Story = {}; 
