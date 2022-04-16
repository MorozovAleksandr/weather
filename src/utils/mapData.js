export const ozonCitiesMapping = (cities) =>
  cities.map((i) => ({
    city: i.city,
    geoCoordinate: i.geoCoordinate,
    areaId: i.areaId,
  }));
