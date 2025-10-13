
import React from 'react';
import MapboxMap from './MapboxMap';

interface Location {
  name: string;
  coordinates: [number, number];
  type: 'country' | 'state' | 'city' | 'local';
}

interface PlumbingAreaMapProps {
  centerCoordinates: [number, number];
  zoom: number;
  locations: Location[];
  areaName: string;
  areaType: 'country' | 'state' | 'city' | 'local';
  className?: string;
}

const PlumbingAreaMap: React.FC<PlumbingAreaMapProps> = ({
  centerCoordinates,
  zoom,
  locations,
  areaName,
  areaType,
  className = ''
}) => {
  // Convert locations to the format expected by MapboxMap
  const mapboxLocations = locations.map(location => ({
    name: location.name,
    coordinates: { lat: location.coordinates[1], lng: location.coordinates[0] },
    description: `${areaType} service location`,
    responseTime: '15-45 min'
  }));

  return (
    <MapboxMap
      locations={mapboxLocations}
      areaName={areaName}
      className={className}
      theme="plumbing"
    />
  );
};

export default PlumbingAreaMap;
