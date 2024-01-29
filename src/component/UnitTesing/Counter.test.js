import { render, cleanup, screen } from "@testing-library/react";

import Counter from "./Counter";

afterEach(()=> {
    cleanup();
})

test("Incriments counter", () => {
    // render the component on virtual dom
    render(<Counter/>)
    //Select the elements you want to interact with
    //const counter = screen.getByTestId("counter");
    const incrementBtn = screen.queryByTestId("increment");
    const decrementBtn = screen.queryByTestId("decrement")
    const heading = screen.getByTestId("heading");
    //const h1 = screen.getByText("This is our counter component");
   
    //expect(counter).toBeInTheDocument();
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
    expect(heading).toHaveTextContent("This is our counter component");
    //expect(h1).toBeInTheDocument();
})

