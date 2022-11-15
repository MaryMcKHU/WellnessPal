export const motivationalOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42ec289be7msh45595c60830fe75p13290djsnb48fc4a49ab9',
		'X-RapidAPI-Host': 'inspiring-quotes.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};