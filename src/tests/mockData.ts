export const mockEstablishments = {
  establishments: [
    {
      RatingValue: "Pass",
    },
    {
      RatingValue: "Pass and Eat Safe",
    },
    {
      RatingValue: "Pass and Eat Safe",
    },
    {
      RatingValue: "Improvement Required",
    },
    {
      RatingValue: "Improvement Required",
    },
    {
      RatingValue: "Improvement Required",
    },
  ],
  meta: {
    dataSource: "Lucene",
    extractDate: "2024-02-28T23:41:34.0411565+00:00",
    itemCount: 6,
    returncode: "OK",
    totalCount: 6,
    totalPages: 1,
    pageSize: 5000,
    pageNumber: 1,
  },
  links: [
    {
      rel: "self",
      href: "http://api.ratings.food.gov.uk/establishments?localauthorityid=197",
    },
  ],
};

export const mockGetAuthorityData: { name: string; value: number }[] = [
  { name: "5-star", value: 22.41 },
  { name: "4-star", value: 43.13 },
  { name: "3-star", value: 12.97 },
  { name: "2-star", value: 1.54 },
  { name: "1-star", value: 17.84 },
  { name: "Exempt", value: 2.11 },
];
