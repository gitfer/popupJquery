$(function () {
	var $primo = $('#primo');
	var $secondo = $('#secondo');
	$primo.on('click', function () {
		alert('primo');
	});
	$secondo.on('click', function () {
		alert('secondo');
	});
});