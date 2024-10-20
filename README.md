# RideWithME

RideWithME is a feature-rich mobile app designed to simplify ride booking with a seamless user experience. Built using React Native and Expo, it delivers a smooth, responsive interface for both Android and iOS platforms.


## Features

- Onboarding Flow: Seamless user registration and setup process.
- Email Password Authentication with Verification: Secure login with email verification. And Also using Google OAuth for easy login using Google credentials.
- Authorization: Secure access control for different user roles.
- Home Screen with Live Location & Google Map: Real-time location tracking with markers on a map.
- Recent Rides: View a list of recent rides at a glance.
- Google Places Autocomplete: Search any place on Earth with autocomplete suggestions.
- Find Rides: Search for rides by entering 'From' and 'To' locations.
- Select Rides from Map: Choose available cars near your location from the map.
- Confirm Ride with Detailed Information: View complete ride details, including time and fare price.
- Pay for Ride Using Stripe: Make payments using multiple methods like cards and others.
- Create Rides After Successful Payment: Book a ride after confirming payment.
- Profile: Manage account details in the profile screen.
- History: Review all rides booked so far.
- Responsive on Android and iOS: Optimized for both Android and iOS devices and many more, including code architecture and reusability
## Technology 
- React Native
- Expo
- Stripe
- PostgreSQL
- Google Maps
- Zustand
- Clerk
- Tailwind CSS

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=

EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=

DATABASE_URL=

EXPO_PUBLIC_SERVER_URL=ridewithm044@gmail.com

EXPO_PUBLIC_GEOAPIFY_API_KEY=

EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
   ## To run this project 

```bash
  npm start
```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

 


## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
