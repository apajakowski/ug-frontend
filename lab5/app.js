var q = $('#q');

var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(1000).map(function(x) {
	return q.val();
})

.switchMap(function(x) {
	return searchWikipedia(x);
})
	
.do(function(arrays) {
	var table = $(".table");
	var row, cell;
	table.append('<td> Szukane slowo: '+arrays[0]+'</td>');
	for(var i=1; i < arrays.length; i++){
		row = $( '<tr />' );
		table.append( row );
		for(var j=0; j<arrays[i].length; j++){
			cell = $('<td>'+arrays[i][j]+'</td>');
			row.append( cell );
		}
	}
})
	
.subscribe(function(arrays) {
});
	
function searchWikipedia(term) {
	return $.ajax({
	url: 'http://en.wikipedia.org/w/api.php',
	dataType: 'jsonp',
	data: {
		action: 'opensearch',
		format: 'json',
		search: term
	}
}).promise();
}