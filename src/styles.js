// const dark = "rgb(0, 41, 55)"
// const darkHSL = "hsl(195, 100, 10.8)"
// const primary = "rgb(0, 206, 165)"
// const primaryHSL = "hsl(168, 100, 40.4)"
// "hsl(195, 75%, 10.8%)"

const baseTheme = {
    colors: {
        green: "hsl(168, 100%, 40.4%)",
        lightgreen: "hsl(168, 100%, 90%)",
        dark: "hsl(195, 100%, 10.8%)",
        grey: "hsl(195, 10%, 60%)",
        white: 'white'
    },
    fontSizes: [10, 16, 18, 20, 24, 32, 64],
    radii: [1, 2, 4, 8, 16, 32, '50%']
}


export const defaultTheme = {
    ...baseTheme,
    buttons: {
        primary: {
            color: 'white',
            backgroundColor: baseTheme.colors.green
        }
    },
}