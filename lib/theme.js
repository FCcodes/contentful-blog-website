import { createTheme } from "@mui/material/styles"

let theme = createTheme({
    breakpoints: {
        values: {
            phone: 0,
            tablet: 420,
            tabletxl: 600,
            laptop: 900,
            desktop: 1300,
        }
    }
})

theme.typography.h1 = {
    fontsize: '2.5rem',
    fontWeight: '600',
    [theme.breakpoints.up('tabletxl')]: {
        fontSize: '3rem'
    },
    [theme.breakpoints.up('tabletxl')]: {
        fontSize: '3rem'
    }
}

theme.typography.h2 = {
    fontSize: '1.1rem',
    fontWeight: '500'
}
theme.typography.h3 = {
    fontSize: '1rem',
    fontWeight: '700',
    [theme.breakpoints.up('laptop')]: {
        fontSize: '1.2rem'
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '1.5rem'
    }
}

theme.typography.body1 = {
    fontSize: '.8rem',
    [theme.breakpoints.up('tabletxl')]:{
        fontSize: '1.1rem'
    }

}

theme.typography.body2 = {
    fontSize: '.7rem',
    [theme.breakpoints.up('tabletxl')]:{
        fontSize: '.8rem'
    }

}

export default theme