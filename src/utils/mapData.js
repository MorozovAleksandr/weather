export const ozonCitiesMapping = (cities) =>
  cities.map((i) => ({
    title: i.fullName,
    geoCoordinate: i.geoCoordinate,
    areaId: i.areaId,
  }));
