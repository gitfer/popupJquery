$(function() {
	var $primo = $('#primo');
	var $secondo = $('#secondo');
	var $dialog = $('#dialog');
	$primo.on('click', function() {
		alert('primo');
	});
	$secondo.on('click', function() {
		$dialog.dialog({
			dialogClass: 'no-close',
			draggable: true,
			resizable: false,
			beforeClose: function(event, ui) {
				$dialog.text('Prova');
			},
			buttons: [{
					text: "Ok",
					class: "ui-button-spl1",
					click: function() {
						// chiamata ajax
					}
				}, {
					text: "Chiudi",
					priority: 'secondary',
					class: "ui-button-spl2",
					click: function() {
						$dialog.text('ciao');
						$(this).dialog({
							buttons: [{
								text: "Ok",
								class: "ui-button-spl1",
								click: function() {
									// chiamata ajax
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
	});
});