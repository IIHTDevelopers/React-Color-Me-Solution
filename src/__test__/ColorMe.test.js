import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorMe from '../components/ColorMe';

describe("boundary", () => {
    test("ColorMe boundary should mount ColorMe without crashing", () => {
        const { getByPlaceholderText, getByText, getAllByRole } = render(<ColorMe />);
        const input = getByPlaceholderText('Enter a number');
        const button = getByText('Color me');
        const boxes = getAllByRole('cell');
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(boxes).toHaveLength(9);
    });

    test("ColorMe boundary renders an input type text", () => {
        const { getByPlaceholderText } = render(<ColorMe />);
        const input = getByPlaceholderText("Enter a number");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
    });

    test("ColorMe boundary renders a button with text 'Color Me'", () => {
        const { getByText } = render(<ColorMe />);
        const button = getByText("Color me");
        expect(button).toBeInTheDocument();
        expect(button.tagName).toBe("BUTTON");
    });

    test("ColorMe boundary renders a table", () => {
        const { getByRole } = render(<ColorMe />);
        const table = getByRole("table");
        expect(table).toBeInTheDocument();
    });

    test("ColorMe boundary renders a table td with value 2", () => {
        const { getByText } = render(<ColorMe />);
        const box2 = getByText("2");
        expect(box2).toBeInTheDocument();
        expect(box2.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 2", () => {
        const { getByText } = render(<ColorMe />);
        const box2 = getByText("2");
        expect(box2).toBeInTheDocument();
        expect(box2.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 3", () => {
        const { getByText } = render(<ColorMe />);
        const box3 = getByText("3");
        expect(box3).toBeInTheDocument();
        expect(box3.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 4", () => {
        const { getByText } = render(<ColorMe />);
        const box4 = getByText("4");
        expect(box4).toBeInTheDocument();
        expect(box4.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 5", () => {
        const { getByText } = render(<ColorMe />);
        const box5 = getByText("5");
        expect(box5).toBeInTheDocument();
        expect(box5.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 6", () => {
        const { getByText } = render(<ColorMe />);
        const box6 = getByText("6");
        expect(box6).toBeInTheDocument();
        expect(box6.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 7", () => {
        const { getByText } = render(<ColorMe />);
        const box7 = getByText("7");
        expect(box7).toBeInTheDocument();
        expect(box7.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 8", () => {
        const { getByText } = render(<ColorMe />);
        const box8 = getByText("8");
        expect(box8).toBeInTheDocument();
        expect(box8.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a table td with value 9", () => {
        const { getByText } = render(<ColorMe />);
        const box9 = getByText("9");
        expect(box9).toBeInTheDocument();
        expect(box9.tagName).toBe("TD");
    });

    test("ColorMe boundary renders a button with onClick property defined", () => {
        const { getByText } = render(<ColorMe />);
        const button = getByText('Color me');
        expect(button).toBeInTheDocument();
        const mockOnClick = jest.fn();
        button.onclick = mockOnClick;
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalled();
    });

    test("ColorMe boundary displays an error message when input is not between 1 and 9", () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<ColorMe />);
        const input = getByPlaceholderText('Enter a number');
        const button = getByText('Color me');
        fireEvent.change(input, { target: { value: '0' } });
        fireEvent.click(button);
        const errorMessage = queryByText('Please input a number between 1-9');
        expect(errorMessage).toBeInTheDocument();
        fireEvent.change(input, { target: { value: '10' } });
        fireEvent.click(button);
        expect(errorMessage).toBeInTheDocument();
    });

    test("ColorMe boundary does not display an error message when input is between 1 and 9", () => {
        const { getByPlaceholderText, queryByTestId, getByText } = render(<ColorMe />);
        const input = getByPlaceholderText('Enter a number');
        const button = getByText('Color me');
        fireEvent.change(input, { target: { value: '5' } });
        fireEvent.click(button);
        const errorMessage = queryByTestId('error-message');
        expect(errorMessage).toBeNull();
    });
});
