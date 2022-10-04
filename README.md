<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/pietromichelini/Webpack-QOL-Data-App/">
    <img src="src/assets/img/favicon.ico" alt="Logo" width="50" height="50">
  </a>
<h3 align="center">Move Informer</h3>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/171776882-54b5f12f-ae0e-45c7-a3ca-9830304c5570.gif" /></p>

<p> This simple app allows the user to search for over 200 cities and displays data about their quality of life. </br>
Click <a target="_blank" href="https://rainbow-churros-a483c4.netlify.app/">here</a> to try it now. </p> 

(The data displayed is fetched from [Teleport.org](https://developers.teleport.org/api/)'s free API)


### Built With
* HTML
* CSS
* JS
* [Webpack](https://webpack.js.org)
* [Sass](https://sass-lang.com/)
* [Lodash](https://lodash.com)
* [Axios](https://axios-http.com/)
* [Webpack-Dotenv](https://www.npmjs.com/package/dotenv-webpack)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

If you don't have Node installed yet, click [here](https://nodejs.org/en/).

If you don't have npm installed yet, simply type the following command in your terminal.


  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/pietromichelini/Webpack-QOL-Data-App.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Build from source 

   ```sh
   npm run build
   ```

4. Open dist/index.html 

In alternative to steps 3 and 4 you can also just serve directly from source (using [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)).
```sh
   npm run dev
   ```
   
## Usage

Simply type a city name in the search bar and click the "SEARCH" button. There will be 4 possible outcomes.

1. If the name you have searched for matches exactly or is close enough to a city name present in Teleport.org's database. The site will display some information about that city. There will also be a "LEARN MORE" button at the bottom that will link to Teleport.org's page dedicated to that city (as shown in the gif below).

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/171222921-88c37db1-877f-449a-b5f6-92974d3376f7.gif" /></p>

At the end of the page there will also be a "LEARN MORE" button that links to [Teleport.org](https://developers.teleport.org/api/)'s page regarding the city searched by the user (as shown in the gif below).

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/171333821-0d6a64ba-2854-46ec-9efe-ab10865d0595.gif" /></p>

2. If the name you have searched for is NOT close enough to any of the actual city names present in Teleport.org's database. The site will display an error message (as shown in the gif below).

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/171223535-2dfd26dd-3a15-4883-b74d-b363d74872fe.gif" /></p>

3. If you have clicked the "SEARCH" button without entering any characters. The site will display error message (as shown in the gif below).

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/171325223-944930d0-9e86-40f7-828c-f4a98828bed0.gif" /></p>

4. In any other case the site will display an error message (as shown in the gif below).

<p align="center"><img src="https://user-images.githubusercontent.com/95065307/171325244-d85c37f3-8604-4acb-80b2-1c3da43dfa19.gif" /></p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Pietro Michelini - pietro.michelini@gmail.com

Project Links: 
- [Github Repository](https://github.com/github_username/repo_name)
- [Netlify Website](https://rainbow-churros-a483c4.netlify.app/)
