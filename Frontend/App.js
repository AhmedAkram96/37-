/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import welcomePage from './js/components/WelcomePage';
import resultPage from './js/components/ResultPage';
import postPage from './js/components/PostPage '

const AppNavigator = createStackNavigator({

  welcomePage: welcomePage,
  resultPage: resultPage,
  postPage: postPage



 });


const App = createAppContainer(AppNavigator)

export default App;
