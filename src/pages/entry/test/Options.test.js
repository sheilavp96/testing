import { render, screen } from "@testing-library/react";
import Options from "../Options";
//get para elementos en el dom
//query para elementos ocultos
//find para elementos asincronos por peticiones
test("display image for each scoop options from server", async () => {
  render(<Options optionType="scoops" />);
  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);
  //confirm all text of images
  const allText = scoopImages.map((element) => element.alt);
  expect(allText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Toppings options", async () => {
  render(<Options optionType="toppings" />);
  const toppingsImage = await screen.findAllByRole("img", { name: /topping$/i });
  expect(toppingsImage).toHaveLength(3);
  const allText = toppingsImage.map((element) => element.alt);
  expect(allText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"]);
});
