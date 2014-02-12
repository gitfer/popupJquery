var callToServer = function (url, dataForServer) {
	var request = $.ajax({
		url: url,
		type: "POST",
		data: dataForServer,
		dataType: "json"
	});

	request.done(function(msg) {
		$("#log").html(msg);
	});

	request.fail(function(jqXHR, textStatus) {
		$("#log").html("Request failed: " + textStatus);
	});
};

function getDataPopup (index) {
	// body...
	switch(index){
		case 1:
		return { 
				template: [
				{
					templateUrl: "#template", 
					postUrlTemplate: "/v1/prova.php",
					dataForServer: JSON.stringify({
						nome:  $('input[name="Nome"]').val(),
						Cognome:  $('input[name="Cognome"]').val()
					})
				},
				{
				templateUrl: "#templateDue", 
				postUrlTemplate: "/v1/prova2.php",
				dataForServer: JSON.stringify({
										PIVA:  $('input[name="PIVA"]').val(),
										Via:  $('input[name="Via"]').val()
									})	
				}]
			};
		case 2:
		return {
				template: [
				{
					templateUrl: "#templateTre", 
					postUrlTemplate: "/v1/prova3.php",
					dataForServer: JSON.stringify({
						nome:  $('input[name="Nome"]').val(),
						Cognome:  $('input[name="Cognome"]').val()
					})
				},
				{
				templateUrl: "#templateQuattro", 
				postUrlTemplate: "/v1/prova4.php",
				dataForServer: JSON.stringify({
										PIVA:  $('input[name="PIVA"]').val(),
										Via:  $('input[name="Via"]').val()
									})	
				}] 
			};
	}
}

var initDialog = function ($dialog, index) {
	// body...
	var dataPopup = getDataPopup(index);

		$dialog.loadTemplate($(dataPopup.template[0].templateUrl), {});
		$dialog.dialog({
			dialogClass: 'no-close',
			draggable: true,
			resizable: false,
			buttons: [{
					text: "Ok",
					class: "ui-button-spl1",
					click: function() {
						// chiamata ajax

						$("#form").validate();
						callToServer(dataPopup.template[0].postUrlTemplate, dataPopup.template[0].dataForServer);
					}
				}, {
					text: "Chiudi",
					priority: 'secondary',
					class: "ui-button-spl2",
					click: function() {
						$dialog.loadTemplate(dataPopup.template[1].templateUrl, {});
						$(this).dialog({
							buttons: [{
								text: "Ok",
								class: "ui-button-spl1",
								click: function() {
									// chiamata ajax
						callToServer(dataPopup.template[1].postUrlTemplate, dataPopup.template[1].dataForServer);
								}
							}, {
								text: "Chiudi",
								priority: 'secondary',
								class: "ui-button-spl2",
								click: function() {
									$(this).dialog("close");
								}
							}]
						});
					}
				}

			]
		});
}
$(function() {
	var $primo = $('#primo');
	var $secondo = $('#secondo');
	var $dialog = $('#dialog');
	var dataForServer = {};

	$primo.on('click', function() {
		initDialog($dialog, 1);
	});

	$secondo.on('click', function() {
		initDialog($dialog, 2);
	});
});