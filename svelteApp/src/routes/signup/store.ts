import { writable } from 'svelte/store';

const data = {
	carBrand: '',
	zipCode: '',
	firstName: '',
	lastName: '',
	carModel: '',
	firstRegistration: ''
};

export const formData = writable(data);

export const page = writable('form');
