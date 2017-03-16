var map = L.map('map', {
		center: [23, 85],
		zoom: 4
	});


L.marker([23.35003932, 85.30807963]).addTo(map)
    .bindPopup('1134')
    .openPopup();


	var wmsLayer = L.tileLayer.wms('http://bhuvannuis.nrsc.gov.in/bhuvan/gwc/service/wms/', {
		layers: 'india3',
    attribution: ' <a href="http://bhuvan.nrsc.gov.in"> BHUWAN | ' +
			' <a href="http://www.isro.gov.in/"> ISRO  ' +
			'',
		id: 'mapbox.light'
	}).addTo(map);


