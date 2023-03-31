import { render,screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Component',()=>{
    test('render the Async Component',async ()=>{
        render(<Async />)

        // listitem is indicate all the list which return the value
        const match = await screen.findAllByRole('listitem');
        expect(match).not.toHaveLength(0);
    });
});