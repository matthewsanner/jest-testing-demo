// __tests__/api.test.js
const fetchData = require("../api");

describe("Pokemon API outcomes handled successfully when", () => {
  it("fetches data successfully from an API", async () => {
    // Mock the fetch function to return a mock response
    // global.fetch = jest.fn().mockResolvedValue({
    //   json: jest.fn().mockResolvedValue({ name: "Pikachu", abilities: [] }),
    // });
    expect.assertions(2);

    const data = await fetchData();
    expect(data).toHaveProperty("name");
    expect(data).toHaveProperty("abilities");
    // console.log("Success!");
    // console.log(data.abilities);
  });

  it("handles API call failure", async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error("API call failed"));
    expect.assertions(1);

    try {
      await fetchData();
    } catch (error) {
      expect(error).toBeTruthy();
      // console.error(error.message);
    }
  });
});
