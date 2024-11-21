import {Dimensions} from 'react-native';

export const PHONE_WIDTH = Dimensions.get('window').width;
export const PHONE_HEIGHT = Dimensions.get('window').height;

export const CAROUSEL_DATA = [
  {
    name: 'Christian Bowen',
    age: '1y 2m',
    gender: 'male',
    url: 'https://images.unsplash.com/photo-1588410670460-cdab54625253?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Emma Johnson',
    age: '2y 6m',
    gender: 'female',
    url: 'https://images.unsplash.com/photo-1480985041486-c65b20c01d1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfDB8MHx8fDA%3D',
  },
  {
    name: 'Liam Smith',
    age: '3y 4m',
    gender: 'male',
    url: 'https://images.unsplash.com/photo-1515012003471-9d658cf66e1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFieXxlbnwwfDB8MHx8fDA%3D',
  },
  {
    name: 'Olivia Brown',
    age: '6m',
    gender: 'female',
    url: 'https://plus.unsplash.com/premium_photo-1663133891660-0e88280392ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhYnl8ZW58MHwwfDB8fHww',
  },
  {
    name: 'Noah Davis',
    age: '1y',
    gender: 'male',
    url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhYnl8ZW58MHwwfDB8fHww',
  },
];

export const INFO_DATA = [
  {
    id: '1',
    title: 'Weight',
    value: '15 lbs\n3 oz',
    timestamp: '1:00 PM Dec 05 2023',
    backgroundColor: '#FFF7E5', // Light yellow
  },
  {
    id: '2',
    title: 'Diaper',
    value: 'Pee\nMedium',
    timestamp: '2h 55m ago',
    backgroundColor: 'rgb(180,187,218)', // Light blue
  },
  {
    id: '3',
    title: 'Feeding',
    value: 'Formula\n5 oz',
    timestamp: '2h 30m ago',
    backgroundColor: '#ecc1af', // Light peach
  },
  {
    id: '4',
    title: 'Sleep',
    value: '2h 20m',
    timestamp: '3h 35m ago',
    backgroundColor: '#bcb1ce', // Light purple
  },
];
