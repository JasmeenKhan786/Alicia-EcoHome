import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import quiz from '../quiz';
import { Entypo } from '@expo/vector-icons';

// if(condition){

// }
// else{

// }

//Ternary Operator ?:
// condition ? true : false

export default class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      score: 0,
      selected: '',
    };
  }
  componentDidMount = () => {
    if (this.props.route.params) {
      var questionNumber = this.props.route.params.questionNumber;
      var score = this.props.route.params.score;
    }

    if (questionNumber !== undefined) {
      this.setState({ questionNumber: questionNumber, score: score });
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FEF9DB' }}>
      
        <View
          style={{
            backgroundColor: '#D9ED76',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            paddingTop: 40,
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Entypo name="list" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
            Quiz
          </Text>
          <Text></Text>
        </View>
        <Image
          source={quiz[this.state.questionNumber].image}
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 200,
            borderRadius: 20,
            marginTop: '20%',
          }}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: '500',
            marginHorizontal: '5%',
          }}>
          {quiz[this.state.questionNumber].question}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: '90%',
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
            justifyContent: 'center',
            backgroundColor:
              this.state.selected === quiz[this.state.questionNumber].option1
                ? 'lightblue'
                : 'white',
          }}
          onPress={() => {
            this.setState({
              selected: quiz[this.state.questionNumber].option1,
            });
          }}>
          <Text>{quiz[this.state.questionNumber].option1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: '90%',
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor:
              this.state.selected === quiz[this.state.questionNumber].option2
                ? 'lightblue'
                : 'white',
            marginTop: 10,
          }}
          onPress={() => {
            this.setState({
              selected: quiz[this.state.questionNumber].option2,
            });
          }}>
          <Text>{quiz[this.state.questionNumber].option2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: '90%',
            height: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor:
              this.state.selected === quiz[this.state.questionNumber].option3
                ? 'lightblue'
                : 'white',
            marginTop: 10,
          }}
          onPress={() => {
            this.setState({
              selected: quiz[this.state.questionNumber].option3,
            });
          }}>
          <Text>{quiz[this.state.questionNumber].option3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: '90%',
            justifyContent: 'center',
            height: 40,
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor:
              this.state.selected === quiz[this.state.questionNumber].option4
                ? 'lightblue'
                : 'white',
            marginTop: 10,
          }}
          onPress={() => {
            this.setState({
              selected: quiz[this.state.questionNumber].option4,
            });
          }}>
          <Text>{quiz[this.state.questionNumber].option4}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#D9ED76',
            width: 100,
            height: 40,
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            //calculate score
            var score = this.state.score;
            if (this.state.selected !== '') {
              if (
                this.state.selected === quiz[this.state.questionNumber].answer0
              ) {
                score += 0;
              } else if (
                this.state.selected === quiz[this.state.questionNumber].answer1
              ) {
                score += 1;
              } else if (
                this.state.selected === quiz[this.state.questionNumber].answer2
              ) {
                score += 2;
              } else if (
                this.state.selected === quiz[this.state.questionNumber].answer3
              ) {
                score += 3;
              }
            } else {
              alert('Please select an option!');
            }

            //navigate
            if (this.state.questionNumber < quiz.length - 1) {
              this.setState({ selected: '' });
              this.props.navigation.push('Quiz', {
                questionNumber: this.state.questionNumber + 1,
                score: score,
              });
            } else {
              this.props.navigation.push('Result', { score: score });
            }
          }}>
          <Text style={{ color: 'black' }}> Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
