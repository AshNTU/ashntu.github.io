function initialize() {
			var companyImage = path+'../../../../images/map-pin.png';
			var mapOptions = {
  				zoom: 18,
  				center: new google.maps.LatLng(1.295190,103.859583)
			}
			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
			var companyPos = new google.maps.LatLng(1.295190,103.859583); 
			var companyMarker = new google.maps.Marker({position: companyPos, map: map, icon: companyImage });
			var contentString = '<div id="content">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h1 id="firstHeading" class="firstHeading">Octava Pte Ltd</h1>'+
				'<div id="bodyContent">'+
				'<p>8 Temasek Boulevard, #38-01 Suntec Tower Three, Singapore 038988<br><strong>Tel:</strong> +65 6837 0368<br><strong>Fax:</strong> +65 6837 0398<br><strong>Email:</strong> <a href="mailto:enquiries@octava.sg">enquiries@octava.sg</a></p>'+
				'</div>'+
				'</div>';
				var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});
		}
		initialize()