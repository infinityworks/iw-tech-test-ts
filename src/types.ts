export type SchemeType = "FHRS" | "FHIS";

export type AuthorityResponseData = { name: string; value: number }[];

export type EstablishmentsResponse = {
  establishments: Array<{
    // AddreestablishmentsssLine1: string;
    // AddressLine2: string;
    // AddressLine3: string;
    // AddressLine4: string;
    // BusinessName: string;
    // BusinessType: string;
    // BusinessTypeID: number;
    // ChangesByServerID: number;
    // Distance: null;
    // FHRSID: number;
    // LocalAuthorityBusinessID: "EHDC8520";
    // LocalAuthorityCode: string; // number
    // LocalAuthorityEmailAddress: string;
    // LocalAuthorityName: string;
    // LocalAuthorityWebSite: string;
    // NewRatingPending: boolean;
    // Phone: string;
    // PostCode: string;
    // RatingDate: string; // ISOString "2019-05-10T00:00:00";
    // RatingKey: string; // "fhis_pass_en-gb";

    // This is the only field used
    // Keeping the others fields commented for information
    RatingValue: string; // "Pass";

    // RightToReply: string; //"";
    // SchemeType: SchemeType;
    // geocode: { longitude: string; latitude: string }; //{ "longitude": "1.308306", "latitude": "51.128421" }
    // scores: {
    //   Hygiene: number; // 5
    //   Structural: number; // 5
    //   ConfidenceInManagement: number; // 5
    // };
  }>;
  meta: {
    dataSource: string; //"Lucene";
    extractDate: string; // ISOString "2024-02-28T22:49:45.1210174+00:00";
    itemCount: number; // 2160;
    returncode: string; // "OK";
    totalCount: number; // 2160; --> used
    totalPages: number; //1;
    pageSize: number; // 5000;
    pageNumber: number; // 1;
  };
  links: Array<{
    rel: string; // "self";
    href: string; //"http://api.ratings.food.gov.uk/establishments?localauthorityid=197";
  }>;
};
