import fetch from 'node-fetch';

const url = 'https://spotify23.p.rapidapi.com/search/?q=duki&type=artists&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd85fbf24f5msh35aebe785439fd4p189ee6jsn691aea6968c9',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));