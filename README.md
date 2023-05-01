# FootballApp

[Watch it live here:](https://footballapp-production.up.railway.app/)
(There is limit of 10 API req)
## Project Description
Football Dashboard is a comprehensive football statistics and information platform that provides users with up-to-date information on various football leagues,
teams, players, and matches. With its sleek design and user-friendly interface, this app is perfect for football enthusiasts looking for a one-stop solution to 
follow their favorite teams and players.

## Features
* Leagues: standings, and fixtures for popular football leagues such as English Premier League, UEFA Champions League, La Liga, Serie A, Bundesliga, Ligue 1, and more.
* Teams: including team overview, squad details, recent performance, and upcoming fixtures.
* Matches: Stay up-to-date with live scores, match statistics, and  commentary for ongoing and past matches.

## Technologies Used
* Frontend: React, Redux, styled-components and Material-UI for a responsive and interactive user interface.
* Backend: Django and Django Rest Framework for RESTful API.
* API: https://www.football-data.org/

## Installation and Usage
1. Clone the repository.
2. Set up a virtual environment and install the required dependencies from the requirements.txt file for the backend.
3. Generate and add Django secret key as an enviroment variable.
4. Run the Django server using the python manage.py runserver command.
5. Navigate to the frontend folder, and install the required dependencies from the package.json file.
6. Run the frontend development server using the npm run dev command.

## API Rate Limit
Please note that the app utilizes football-data.org API to fetch data, which are subject to rate limits. The current limit is set to 10 requests per minute per user. So be mindful of that.

## Author
Fredrik Andrén
