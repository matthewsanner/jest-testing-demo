// __tests__/api.test.js
const fetchData = require("../api");

describe("fetchData function", () => {
  it("fetches successfully data from an API", async () => {
    // Mock the fetch function to return a mock response
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ name: "Pikachu", abilities: [] }),
    });
    expect.assertions(2);

    try {
      const data = await fetchData();
      expect(data).toHaveProperty("name");
      expect(data).toHaveProperty("abilities");
      console.log("Success!");
    } catch (error) {}
  });

  it("handles API call failure", async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error("API call failed"));
    expect.assertions(1);

    try {
      await fetchData();
    } catch (error) {
      expect(error).toBeTruthy();
      console.error(error.message);
    }
  });
});
