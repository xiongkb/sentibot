# Sentibot Introduction
Deployed version: https://sleepy-atoll-40002.herokuapp.com/home

The idea behind this app is to help those who struggle to communicate their feelings to another. This sentimental bot, powered by IBM's watson api, will calculate and analyze a user who speaks with them. User will have to create an account or log in before they're able to access Sentibot. Once they're logged in, Sentibot will ask user a series of questions. Sentibot will analyze and try to help the user communicate in a positive way so that their message can be easily taken and not offended by another party.

# How It Works
Our team used google passport and MongoDB to authenticate a user. Once the user has been authenticated, they will be taken to the homepage where they can chat with Sentibot. All the messages are stored into a noSQL database as user talks to Sentibot. Sentibot is powered by IBM watson api who does the calculation and gives a 
numerical value based on the user's text input. Based on this value, our team added logic to tell Sentibot what to say to the user.

# Technologies Used
- IBM's Watson Api
- Google Passport Authentication
- React-chat-window
- React.js
- Bootstrap and Materialize
- CSS3
- JSX6
