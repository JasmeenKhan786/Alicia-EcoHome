import { MaterialCommunityIcons } from '@expo/vector-icons';
const homeFacilityDetails = [
  {
    id: '01',
    category: 'Energy',
    image : require('./assets/energy.png'),
    description:
      "Solar energy is best for your homes. It helps the environment",
    vendors:[
      {name:'Eco Electric Solutions PTY LTD', email:"ecoelectricsolutionsnsw@gmail.com", contact:'+0468 686 231', image:'none', address:'Online', website:'https://ecoelectricsolutions.com.au/'},
      {name:'Crown Electrical Solutions', email:"admin@crownelec.com.au", contact:'++61246474111', image:'', address:'2/147 Smeaton Grange Rd, Smeaton Grange NSW 2567',website:'https://www.crownelec.com.au/-'},
    ]
  }, 
  {
    id: '02',
    category: 'Clothes',
    image:require('./assets/energy.png'),
    description:
      "Buying clothes is something we love, but the clothes might use fabrics which is not helping the environment. Here are our recommendations for buying clothes which are eco-friendly and beautiful at the same time. ",
    vendors:[
      {name:'Ethical Tees', email:"Level One, 70 Shepherd St, Marrickville NSW 2204", contact:'+02 8005 1239', image:'none', address:'Level One, 70 Shepherd St, Marrickville NSW 2204',website:'https://ethicaltees.com.au/'},
      {name:'The Social Outfit', email:"info@thesocialoutfit.org", contact:'+02 9550 3691', image:'', address:'188 King St, Newtown NSW 2042',website:'https://thesocialoutfit.org/'},
    ]
  },
  {
    id: '03',
    category: 'Vehicles',
    image : require('./assets/energy.png'),
    description:
      "Using Eco-Friendly cars allows the reduce of gas and other products and allows you to cut down on those carbon emmisions. ",
    vendors:[
      {name:'Nissan', email:"csc@nissan.com.au", contact:'+ 1800 035 035', image:'none', address:'586 Pacific Highway, CHatswood, Sydney, NSW 2067', website:'https://www.nissan.com.au/'},
      {name:'Tesla', email:"APACPress@tesla.com", contact:'+1-800 662 7232', image:'', address:' Level 14, 15 Blue St. North Sydney, NSW 2060',website:'https://www.tesla.com/en_au'},
    ]
  },
  {
    id: '04',
    category: 'Other',
    image : require('./assets/energy.png'),
    description:
      "There are many other products from different shop are eco-friendly and safe to use ",
    vendors:[
      {name:'OfficeWorks', email:"", contact:'+1300 633 423', image:'', address:"Officeworks Alexandria, 91 O'Riordan St, Alexandria NSW 2015", website:'https://www.officeworks.com.au/'},

      {name:'Harvey Norman', email:"HNPrivacy.officer@au.harveynorman.com", contact:'+(02) 9201 6111', image:'', address:" Level 14, 15 Blue St. North Sydney, NSW 2060",website:'https://www.harveynorman.com.au/'},
    ]
  },
  {
    id: '05',
    category: 'Recycle',
    image : require('./assets/energy.png'),
    description:
      "These shops allows you to recycle old and unwated recycleable materials",
    vendors:[
      {name:'PlanetArk', email:" legal@planetark.org", contact:'+(02) 8484 7200', image:'', address:"1802/323 Castlereagh St, Sydney NSW 2000", website:'https://planetark.org/'},

    ]
  },


];

export default homeFacilityDetails;
