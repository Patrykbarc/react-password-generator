# React Password Generator App

## Deploy

https://react-password-generator-patrykbarc.netlify.app/

## Overview

The Password Generator App is a simple React-based application that allows users to generate secure passwords based on their preferences. The application provides a user-friendly interface to customize password length and include or exclude different character types such as letters, capital letters, numbers, and special characters.

## Components

1. App<br>
   The main component of the application, responsible for rendering the overall structure. It includes the Header, Body, and Footer components.
2. Header<br>
   Displays the application title and a lock icon.

3. Body<br>
   Allows users to customize password settings, including length and character types.

4. Footer<br>
   Handles password generation, copying to clipboard, and displays generated passwords.

## Password Generation Logic

The password generation logic is encapsulated in a separate utility file `(utils/generatePassword.js)`. The generatePassword function takes user settings and returns a randomly generated password.

## Conclusion

The Password Generator App focuses on providing a secure and customizable solution for generating passwords. Users can adjust settings according to their preferences, and the application ensures the generated passwords are strong and meet the specified criteria. The modular structure of components promotes maintainability and extensibility.

## Additional Info

The user interface of the Password Generator App was crafted using the Bootstrap framework, which accelerated development and enhancing the overall look and feel. Thanks to the Bootstrap team for their contribution to the app's visual appeal and simplicity.
