import { createContext, useState } from 'react'


export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [bgColor, setBgColor] = useState('#010101');
    const [cardColor, setCardColor] = useState('#0E0E0E');
    const [bFontColor, setbFontColor] = useState('#FFFFFF');
    const [fontColor, setFontColor] = useState('#858585');
    const [sFontColor, setsFontColor] = useState('#53A825');
    const [sColor, setsColor] = useState('#53A825');

    const value = {
        bgColor, setBgColor,
        cardColor, setCardColor,
        bFontColor, setbFontColor,
        fontColor, setFontColor,
        sFontColor, setsFontColor,
        sColor, setsColor
    }

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider };