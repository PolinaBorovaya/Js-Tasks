let data = [
	{ country: 'country1', city: 'city11' },
	{ country: 'country2', city: 'city21' },
	{ country: 'country3', city: 'city31' },
	{ country: 'country1', city: 'city12' },
	{ country: 'country1', city: 'city13' },
	{ country: 'country2', city: 'city22' },
	{ country: 'country3', city: 'city32' },
];


/*{
	'country1': ['city11', 'city12', 'city13'],
	'country2': ['city21', 'city22'],
	'country3': ['city31', 'city32']
}*/

const result = data.reduce((res, obj) => {
    res[obj.country] = res[obj.country] || [];
    res[obj.country].push(obj.city);
    return res;
}, {});

console.log(result);
