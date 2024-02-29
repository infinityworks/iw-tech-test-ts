import type { Request, Response } from "express";
import fetch from "node-fetch";
import { AuthorityResponseData, EstablishmentsResponse } from "./types";
// import { URLSearchParams } from "url";

export const baseUrl = "http://api.ratings.food.gov.uk/";
const requestParams = {
  headers: {
    Accept: "application/json",
    "x-api-version": "2",
  },
};

export const getAuthorities = async (req: Request, res: Response) => {
  let authoritiesResponse;

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

export const aggregateRatings = (
  input: EstablishmentsResponse
): AuthorityResponseData => {
  const agg = new Map<string, number>();
  const ret: AuthorityResponseData = [];

  for (let i = 0; i < input.establishments.length - 1; i++) {
    const doc = input.establishments[i];
    agg.set(doc.RatingValue, (agg.get(doc.RatingValue) || 0) + 1);
  }

  agg.forEach((value, key) =>
    ret.push({
      name: key,
      value: Number(((value * 100) / input.meta.itemCount).toFixed(2)),
    })
  );

  return ret;
};

export const getAuthority = async (req: Request, res: Response) => {
  const authorityId = parseInt(req.params.authorityId);

  if (isNaN(authorityId)) {
    return res
      .status(400)
      .json({ error: "No valid authority ID was specified" });
  }

  let authoritiesResponse;

  try {
    const url = new URL(baseUrl + "/Establishments");
    url.searchParams.append("localAuthorityId", authorityId.toString());

    authoritiesResponse = await fetch(url.href, requestParams);
    const authoritiesJson = await authoritiesResponse.json();

    return res.json(aggregateRatings(authoritiesJson));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Unable to access FSA API" });
  }
};
