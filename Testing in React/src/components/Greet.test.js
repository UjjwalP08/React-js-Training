import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greet from "./Greet"


// describe is our test-suite and test is our test

describe('Greet component text render',()=>{
    test('Greet page Test file  ',()=>{
        // arrange
        render(<Greet />);
    
        // Act
    
        // Assert
        const match = screen.getByText('Greet page',{exact:false});
        expect(match).toBeInTheDocument();
    
    })

    test('render the "Nothing Changed" ',()=>{
        // Arrange
        render(<Greet />);

        //Act
        // nothing

        // Assert
        const match = screen.getByText('Nothing Changed',{exact:false});
        expect(match).toBeInTheDocument();
    })
    test('render the "Changed!!!" ',()=>{

        // Arrange
        render(<Greet />);

        // Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);

        // Assert
        const match = screen.getByText('Changed!!!');
        expect(match).toBeInTheDocument();

    })

    test('when render changed not render "Nothing changed" ',()=>{
        // Arrange
        render(<Greet />)

        // Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement);


        // Assert
        const match = screen.queryByText('Nothing changed',{exact:false});
        expect(match).toBeNull();
    })
})

