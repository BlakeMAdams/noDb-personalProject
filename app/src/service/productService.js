import axios from 'axios';

// SERVICES FUNCTIONS

export function getBottoms() {
    console.log('getBottoms fired');
    return axios.get('http://localhost:3030/api/bottoms').then(res => res.data)
}

export function getShirts() {
    console.log('getShirts fired');
    return axios.get('http://localhost:3030/api/shirts').then(res => res.data)
}

export function getDresses() {
    console.log('getDresses fired');
    return axios.get('http://localhost:3030/api/dresses').then(res => res.data)
}

export function getPatterns() {
    console.log('getPatterns fired');
	return axios.get('http://localhost:3030/api/patterns').then(res => res.data)
}

export function getImage(horiz, vert) {
    console.log('getImage fired');
	return axios.get('https://unsplash.it/api/' + {horiz} + '/' + {vert}).then(res => res.data)
}