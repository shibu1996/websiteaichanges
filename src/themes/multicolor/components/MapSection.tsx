import React, { useEffect, useRef, useState } from 'react';

// The pageType prop will decide the zoom level for map
const getZoomLevel = (pageType) => {
  switch (pageType) {
    case 'country': return 3;
    case 'state': return 7;
    case 'city': return 10;
    case 'local_area': return 13;
    default: return 8;
  }
};

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2pibG9nczIwMjMiLCJhIjoiY21iM2ZmNDQ4MDZ5djJwc2F4MXdvejRjZSJ9.DM8BhznWkYNPO_ty6UFtkQ';

console.log(MAPBOX_TOKEN,"this is mapbox token");

const MapSection = ({
  locationName = 'Service Area',
  lat,
  lng,
  pageType = 'country'
}) => {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    let map;
    let mapboxgl;
    let mounted = true;

    const loadMap = async () => {
      mapboxgl = await import('mapbox-gl');
      mapboxgl.default.accessToken = MAPBOX_TOKEN;

      if (mapRef.current && lat != null && lng != null && mounted) {
        map = new mapboxgl.default.Map({
          container: mapRef.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: [lng, lat],
          zoom: getZoomLevel(pageType),
          projection: 'globe',
          pitch: 45,
        });

        map.addControl(new mapboxgl.default.NavigationControl({ visualizePitch: true }), 'top-right');

        // Add single marker
        const markerEl = document.createElement('div');
        markerEl.style.width = '40px';
        markerEl.style.height = '40px';
        markerEl.style.background = '#3B82F6';
        markerEl.style.borderRadius = '50%';
        markerEl.style.boxShadow = '0 4px 15px rgba(59,130,246,0.2)';
        markerEl.style.display = 'flex';
        markerEl.style.alignItems = 'center';
        markerEl.style.justifyContent = 'center';
        markerEl.style.color = 'white';
        markerEl.style.fontSize = '22px';
        markerEl.innerHTML = '📍';

        new mapboxgl.default.Marker(markerEl)
          .setLngLat([lng, lat])
          .setPopup(new mapboxgl.default.Popup().setHTML(`<h3>${locationName}</h3><p>Professional services available</p>`))
          .addTo(map);

        map.on('load', () => setMapReady(true));
      }
    };

    loadMap();

    return () => {
      mounted = false;
      if (map) map.remove();
    };
  }, [lat, lng, locationName, pageType]);

  if (lat == null || lng == null) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Service Area Map</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find our service location and coverage area on the interactive map below.
          </p>
        </div>

        <div className="relative">
          <div
            ref={mapRef}
            id="map-container"
            className="w-full h-[500px] rounded-lg shadow-lg border border-border"
          />
          <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border">
            <h4 className="font-bold text-card-foreground mb-2">{locationName}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {locationName} - Professional Service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
