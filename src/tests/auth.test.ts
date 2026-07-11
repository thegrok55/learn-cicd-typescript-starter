import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.ts";
import { IncomingHttpHeaders } from "http";

const httpHeaderCorrect : IncomingHttpHeaders = {
 authorization : "ApiKey asdfasdfasdf"
}

const httpHeaderWrong : IncomingHttpHeaders = {}


describe("Testing the getAPIKey function",
 ()=>{
  
  test("Authorization header is defined",()=>{
    expect(getAPIKey(httpHeaderCorrect)).toEqual("qwer")
  })

  test("Authorization header is null",()=>{
    expect(getAPIKey(httpHeaderWrong)).toBeNull()
  })
 })