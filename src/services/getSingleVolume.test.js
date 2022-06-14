import { getSingleVolume } from "./getSingleVolume";
import axios from "axios";

jest.mock("axios");

describe("get single book service", () => {
  test("should return single book object when API call is successful", async () => {
    const bookId = "UAYvDwAAQBAJ";
    const data = {
      id: "UAYvDwAAQBAJ",
      name: "Eloquent JavaScript",
    };
    axios.get.mockResolvedValue({ data });
    const book = await getSingleVolume(bookId);
    expect(book).toEqual(data);
  });
});
