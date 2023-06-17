const getCurrentDate = () => {
	const atual = new Date();
	const yyyy = atual.getFullYear();
	let mm = atual.getMonth() + 1; // Months start at 0!
	let dd = atual.getDate();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;

	const formattedToday = yyyy + '-' + mm + '-' + dd;
	return formattedToday
};

module.exports = {
	getCurrentDate
}
