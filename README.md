# Clock App

### Project shows clock and information about your country and city

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)
- [Resources](#Resources)

#

### Prerequisites

- <img src="readme/nodejs.png" width="25" style="top: 8px" /> _Node JS @18.X and up_
- <img src="readme/npm.png" width="25" style="top: 8px" /> _npm @8 and up_
- <img src="readme/typescript.png" width="25" style="top: 8px" /> _typescript @4 and up_

#

### Tech Stack

- <img src="readme/react.png" width="25" style="top: 8px" /> _React @ 18.2.0 - front-end framework_
- <img src="readme/styled-components.png" width="25" style="top: 8px"/> _Styled-components @ 5.3.6 - for styles_
- <img src="readme/react-helmet.jpeg" width="25" style="top: 8px" /> _React-helmet @6.1.0 - library adding information in head_

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/AlexanderGrigoryan/Clock-App.git
```

2. Next step requires install all the dependencies.

```
npm install
```

#

### Project Structure

```
|--- src
|   |--- img # project images
|   |--- components # reusable components
|   |--- App.tsx # export all components
- package.json # dependency manager configurations
```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#

### Resources

- [figma](https://www.figma.com/file/EJammfajR2L5iHhnrIl26y/interactive-card-details-form?node-id=0%3A224&t=7LdOBhKyrh1yt58H-0).
- [World Time API](http://worldtimeapi.org/)
- [IP Geolocation API](https://freegeoip.app/)
- [Programming Quotes API](https://github.com/lukePeavey/quotable)
