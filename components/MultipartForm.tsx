import { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface MultipartFormProps {
  questions: string[];
  onSubmit: (responses: {[key: string]: string}) => void;
}

export default function MultipartForm({ questions, onSubmit }: MultipartFormProps) {
  const questionIndex = useRef(0);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>(questions[questionIndex.current]);
  const [responses, setResponses] = useState(questions.reduce((acc: {[key: string]: string }, question) => {
    acc[question] = '';
    return acc;
  }, {}));

  const next = () => {
    if (responses[currentQuestion]) {
      questionIndex.current = questionIndex.current + 1;
      setCurrentQuestion(questions[questionIndex.current]);
    } else {
      setError('Invalid Response');
    }
  }

  const previous = () => {
    if (questionIndex.current > 0) {
      questionIndex.current = questionIndex.current - 1;
      setCurrentQuestion(questions[questionIndex.current]);
    }
  }

  const handleTextChange = (text: string) => {
    setResponses({...responses, [currentQuestion]: text});
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{currentQuestion}</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Type your response here...'
          onChangeText={handleTextChange}
          value={responses[currentQuestion]}
        />
        {error && <Text style={styles.errorText} onPress={() => setError(null)}>{error}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        {questionIndex.current > 0 && <Button title="back" onPress={previous} />}
        {(questionIndex.current < questions.length && questionIndex.current !== questions.length - 1) && <Button title="next" onPress={next} />}
        {responses[questions[questions.length - 1]] && <Button title="Submit" onPress={() => onSubmit(responses)} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    backgroundColor: '#efefef',
    width: '100%',
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 6,
    color: '#666'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    textDecorationLine: 'underline',
  }
})
