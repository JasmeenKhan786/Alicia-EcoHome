
const quiz = [
  {
    id: '1', 
    question: 'Which source of energy do you use at home?',
    image:require('./assets/electricity.png'), 
    option1: 'solar',
    option2: 'electricity',
    option3: 'wood, lpg/propane, kerosene, etc',
    option4: 'A combination of above. ', 
    answer0: 'wood, lpg/propane, kerosene, etc',
    answer1: 'electricity',
    answer2: 'A combination of above. ',
    answer3: 'solar'
  },
  {
    id: '2',
    question: 'Which means of transport do you use?',
    image:require('./assets/train.png'),
    option1: 'Public Transport',
    option2: 'Electric vehicle',
    option3: 'Cycle, skateboard etc',
    option4: 'Petrol/Gas/Diesel Vehicle',
    answer3: 'Cycle, skateboard etc',
    answer2: 'Public Transport',
    answer1: 'Electric vehicle',
    answer0: 'Petrol/Gas/Diesel Vehicle'
  },
  {
    id: '3',
    question: 'How much gallons of water do you use?',
    image: require('./assets/water.png'),
    option1: '600L+',
    option2: '400L - 600L',
    option3: '250L - 400L',
    option4: '100L - 250L',
    answer3: '100L - 250L',
    answer2: '250L - 400L',
    answer1: '400L - 600L',
    answer0: '600L+'
  },
  {
    id: '4',
    question: 'How much rubbish does your household produce daily?',
    image:require('./assets/bin.png'),
    option1: 'Barely Anything',
    option2: 'Around 1kg',
    option3: 'Around 2kg',
    option4: '3kg and above',
    answer3: 'Barely Anything',
    answer2: 'Around 1kg',
    answer1: 'Around 2kg',
    answer0: '3kg and above'
  },
  {
    id: '5',
    question: 'How many Vehicles does your household own?',
    image:require('./assets/car.png'),
    option1: '1 Vehicle',
    option2: '2 Vehicles',
    option3: '3 Vehicles',
    option4: '4 and above Vehicles',
    answer3: '1 Vehicle',
    answer2: '2 Vehicles',
    answer1: '3 Vehicles',
    answer0: '4 and above Vehicles'
  },
   {
    id: '6',
    question: 'Does your community do anything to help the envrioment? (Eg. Plant trees each year)',
    image:require('./assets/tree.png'),
    option1: 'Yes',
    option2: 'No',
    option3: 'Maybe',
    option4: 'Not sure',
    answer3: 'Yes',
    answer2: 'Maybe',
    answer1: 'Not sure',
    answer0: 'No',

  },
  {
    id: '7',
    question: 'How much energy does your household use daily??',
    image:require('./assets/lightbulb.png'),
    option1: '15KW and below',
    option2: '15KW - 18KW',
    option3: '18KW - 25KW',
    option4: '25KW and above',
    answer3: '15KW and below',
    answer2: '15KW - 18KW',
    answer1: '18KW - 25KW',
    answer0: '25KW and above'
  }
  
];

export default quiz;
