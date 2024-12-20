
## Introduction

RideWithME is a feature-rich mobile app designed to simplify ride booking with a seamless user experience. Built using React Native and Expo, it delivers a smooth, responsive interface for both Android and iOS platforms

## Technology
- React Native
- Expo
- Stripe
- PostgreSQL
- Google Maps
- zustand
- Clerk
- Tailwind CSS

## Feature
- **Onboarding Flow**: Seamless user registration and setup process.
- **Email Password Authentication with Verification**: Secure login with email verification.
-  **oAuth Using Google**: Easy login using Google credentials.
- **Authorization**: Secure access control for different user roles.

- **Home Screen with Live Location & Google Map**: Real-time location tracking with markers on a map.

- **Recent Rides**: View a list of recent rides at a glance.

- **Google Places Autocomplete**: Search any place on Earth with autocomplete suggestions.

- **Find Rides**: Search for rides by entering 'From' and 'To' locations.

- **Select Rides from Map**: Choose available cars near your location from the map.

- **Confirm Ride with Detailed Information**: View complete ride details, including time and fare price.

- **Pay for Ride Using Stripe**: Make payments using multiple methods like cards and others.

- **Create Rides After Successful Payment**: Book a ride after confirming payment.

- **Profile**: Manage account details in the profile screen.

- **History**: Review all rides booked so far.

- **Responsive on Android and iOS**: Optimized for both Android and iOS devices.

and many more, including code architecture and reusability


## Quick Start

Follow these steps to set up the project locally on your machine.

- Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

## Installation

Install the project dependencies using npm:

```bash
npm install
```

## Set Up Environment Variables

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=

EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=

DATABASE_URL=

EXPO_PUBLIC_SERVER_URL=

EXPO_PUBLIC_GEOAPIFY_API_KEY=

EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```
**Running the Project**

```bash
npx expo start
```
Download the [Expo Go](https://expo.dev/go) app and Scan the QR code on your respective device to view the project.


