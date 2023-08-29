import React, { useState } from 'react';
import './ColorMe.css';

const ColorMe = () => {
    const [selectedBox, setSelectedBox] = useState(null);
    const [prevSelectedBox, setPrevSelectedBox] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleColorButtonClick = () => {
        if (selectedBox) {
            if (prevSelectedBox) {
                document.getElementById(prevSelectedBox).style.backgroundColor = 'white';
            }
            document.getElementById(selectedBox).style.backgroundColor = 'green';
            setPrevSelectedBox(selectedBox);
        } else {
            setErrorMessage('Please input a number between 1-9');
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (/^[1-9]$/.test(inputValue)) {
            setSelectedBox(`box${inputValue}`);
            setErrorMessage('');
        } else {
            setSelectedBox(null);
            setErrorMessage('Please input a number between 1-9');
        }
    };

    return (
        <div className="container">
            <div className="left-column">
                <input
                    type="text"
                    placeholder="Enter a number"
                    onChange={handleInputChange}
                />
                <button className="color-button" onClick={handleColorButtonClick}>
                    Color me
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="right-column">
                <table className="box-table">
                    <tbody>
                        <tr>
                            <td className="box" id="box1" data-testid="box1">1</td>
                            <td className="box" id="box2" data-testid="box2">2</td>
                            <td className="box" id="box3" data-testid="box3">3</td>
                        </tr>
                        <tr>
                            <td className="box" id="box4" data-testid="box4">4</td>
                            <td className="box" id="box5" data-testid="box5">5</td>
                            <td className="box" id="box6" data-testid="box6">6</td>
                        </tr>
                        <tr>
                            <td className="box" id="box7" data-testid="box7">7</td>
                            <td className="box" id="box8" data-testid="box8">8</td>
                            <td className="box" id="box9" data-testid="box9">9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ColorMe;