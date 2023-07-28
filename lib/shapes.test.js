const generateLogo = require("../generateLogo");

describe("logoGenerator", () => {
  describe("shape", () => {
    it("should return back the XML with the correct shape", () => {
      //arrange controlled values
      //data i want to put through and see if it works
      const data = {
        shape: "Circle",
        shapeColor: "White",
      };
      //what i want to get
      const result = `
<svg version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">
<${shape(data.shape)} ${shapeColor(data.shapeColor)}/>
</svg>
`;
      // actually run the code and get the results
      const logo = generateLogo(data);
      //compare and run the tests
      expect(logo).toEqual(result);
    });
  });
});
