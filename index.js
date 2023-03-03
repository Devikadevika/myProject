/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Calender from './components/Calender';
import home from './components/home';
import Meeting from './components/Meeting';
import Participants from './components/Participants';
import Progress from './components/Progress';

AppRegistry.registerComponent(appName, () => home);
