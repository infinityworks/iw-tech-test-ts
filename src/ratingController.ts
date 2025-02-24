import type { Request, Response } from "express";

export const getAuthorities = async (req: Request, res: Response) => {
  const requestParams = {
    headers: {
      Accept: "application/json",
      "x-api-version": "2",
    },
  };

  let authoritiesResponse = null;

  try {
    authoritiesResponse = await fetch(
      "http://api.ratings.food.gov.uk/Authorities",
      requestParams
    );

    const authoritiesParsed = await authoritiesResponse.json();

    const response: { id: number; name: string }[] =
      parseAuthorities(authoritiesParsed);

    return res.json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Unable to access FSA API" });
  }
};

export const parseAuthorities = (
  authoritiesParsed: any
): { id: number; name: string }[] => {
  return authoritiesParsed.authorities.map((json: { [key: string]: any }) => {
    return {
      id: json.LocalAuthorityId,
      name: json.Name,
    };
  });
};

export const getAuthority = async (req: Request, res: Response) => {
  const authorityId = parseInt(req.params.authorityId);

  if (isNaN(authorityId)) {
    return res
      .status(400)
      .json({ error: "No valid authority ID was specified" });
  }

  // This is just sample data to demonstrate the contract of the API
  const oneRatingsSample: { name: string; value: number }[] = [
    { name: "5-star", value: 22.41 },
    { name: "4-star", value: 43.13 },
    { name: "3-star", value: 12.97 },
    { name: "2-star", value: 1.54 },
    { name: "1-star", value: 17.84 },
    { name: "Exempt", value: 2.11 },
  ];

  const anotherRatingsSample: { name: string; value: number }[] = [
    { name: "5-star", value: 50 },
    { name: "4-star", value: 0 },
    { name: "3-star", value: 0 },
    { name: "2-star", value: 0 },
    { name: "1-star", value: 25 },
    { name: "Exempt", value: 25 },
  ];

  const ratings =
    authorityId % 2 === 1 ? oneRatingsSample : anotherRatingsSample;

  return res.json(ratings);
};
