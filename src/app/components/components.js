import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Navbar,
  Hero,
  User
])
.name;

export default componentModule;
