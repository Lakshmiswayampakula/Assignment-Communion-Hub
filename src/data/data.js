import tech from '../image/Religion-1.jpg';
import startup from '../image/Religion-2.jpg'
import ai from '../image/Charity-1.jpg'
import music from '../image/social-1.jpeg'
import coding from '../image/Religion-3.jpg'
import business from '../image/Religion-4.jpg'
import marathon from '../image/social-2.jpg'
import food from '../image/Religion-5.jpg'

export const events = [
  // Today's Events
  {
      id: 1,
      name: 'Diwali Celebrations',
      category: 'Religion',
      image: tech,
      time: '10:00 AM IST',
      date: 'Monday, March 10, 2025',
      location: 'Tiruvanmiyur, Chennai',
      description: 'Festival of Lights – A grand celebration of Diwali with cultural performances.'
  },
  {
      id: 2,
      name: 'Blood Donation Drive',
      category: 'charity',
      image: startup,
      time: '3:30 PM IST',
      date: 'Monday, March 10, 2025',
      location: 'Gachibowli, Hyderabad',
      description: 'Donate blood and save lives at our community blood drive.'
  },

  // Tomorrow's Events
  {
      id: 3,
      name: 'Hunger-Free Mission ',
      category: 'charity',
      image: ai,
      time: '2:00 PM IST',
      date: 'Tuesday, March 11, 2025',
      location: 'Hope Orphanage, Bangalore',
      description: 'A campaign to provide meals for struggling families.'
  },
  {
      id: 4,
      name: 'NextGen Leaders',
      category: 'social',
      image: music,
      time: '6:00 PM IST',
      date: 'Tuesday, March 11, 2025',
      location: 'Community Hall, Hyderabad',
      description: 'A youth leadership and development program.'
  },

  // This Week's Events
  {
      id: 5,
      name: 'Sacred Verses, Unified Souls"',
      category: 'religious',
      image: coding,
      time: '9:00 AM IST',
      date: 'Wednesday, March 12, 2025',
      location: 'ISKCON Temple, Pune',
      description: 'Exploring the Wisdom of Holy Scriptures Together'
  },
  
  {
      id: 6,
      name: 'Navratri Utsav',
      category: 'religious',
      image: business,
      time: '11:00 AM IST',
      date: 'Saturday, March 15, 2025',
      location: 'Kukatpally, Hyderabad',
      description: 'A vibrant event featuring devotional songs and Garba.'
  },

  // Next Month's Events
  {
      id: 7,
      name: 'Women Empowerment',
      category: 'social',
     image: marathon,
      time: '7:00 AM IST',
      date: 'Saturday, April 5, 2025',
      location: 'NGO Office, Jaipur',
      description: 'Championing equality for women across all fields, breaking barriers, and building a future of limitless opportunities.'
  },
  {
      id: 8,
      name: 'Divine Chants',
      category: 'religious',
      image: food,
      time: '1:00 PM IST',
      date: 'Thursday, April 10, 2025',
      location: 'Ashram, Rishikesh',
      description: 'A musical event featuring devotional hymns and prayers.'
  },
  
];

export const categories = [
    {
      id: 1,
      name: 'Fast Food',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
    },
    {
      id: 2,
      name: 'Pizza',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
    },
    {
      id: 3,
      name: 'Wings',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
    },
    {
      id: 4,
      name: 'Indian',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
    },
    {
      id: 5,
      name: 'Latest Deals',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
    },
    {
      id: 6,
      name: 'Restaurant Rewards',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
    },
    {
      id: 7,
      name: 'Best Overall',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
    },
    {
      id: 8,
      name: 'Shipped Free',
      image:
        'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
    },
  ];
  
