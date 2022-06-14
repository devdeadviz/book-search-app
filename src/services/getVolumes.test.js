import { getVolumes } from "./getVolumes";
import axios from "axios";

jest.mock("axios");

describe("get books service", () => {
  test("should return books array when API call is successful", async () => {
    const keyword = "javascript";
    const items = [
      {
        id: 1,
        name: "Javascript",
      },
      {
        id: 2,
        name: "PHP",
      },
    ];
    axios.get.mockResolvedValue({ data: { items } });
    const books = await getVolumes(keyword);
    expect(books).toEqual(items);
  });
});
