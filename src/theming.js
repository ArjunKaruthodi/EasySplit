import { createMuiTheme, lighten, darken } from '@material-ui/core/styles';

const theme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true
        },
        MuiInput: {
            disableUnderline: true
        },
        MuiInputLabel: {
            disableAnimation: true,
            shrink: false
        },
        MuiLink: {
            underline: 'always'
        }
    },
    palette: {
        primary: {
            main: '#0078d4'
        },
        secondary: {
            main: '#343434',
            contrastText: '#ffffff'
        },
        tertiary: {
            main: '#505050',
            contrastText: '#ffffff'
        },
        contrastBackground: {
            light: '#e9e9e9'
        },
        easySplitHyperlink: {
            light: '#0074cc'
        },
        easySplitBlue: {
            light: '#0078d4'
        },
        easySplitBackgroundBlue: {
            light: lighten("#0078d4", 0.55)
        },
        easySplitBlueHover: {
            light: darken("#0078d4", 0.10)
        },
        easySplitLightGray: {
            main: '#e6e6e6'
        },
        easySplitDarkGray: {
            main: '#505050'
        },
        easySplitDeepGray: {
            main: '#2f2f2f'
        },
        easySplitHeaderGray: {
            main: '#737373'
        },
        easySplitSubNavBackgroudGray: {
            main: lighten("#505050", 0.60)
        },
        easySplitSubNavHoverGray: {
            main: darken("#505050", 0.10)
        },
        easySplitMainForeground: {
            light: '#505050'
        },
        easySplitErrorRed: {
            light: '#d83b01'
        },
        easySplitInfoGreen: {
            light: '#107c10'
        },
        easySplitWarningOrange: {
            light: '#ffb900'
        },
        easySplitWhite: {
            main: '#ffffff'
        },
        easySplitPurple: {
            light: '#8661c5'
        },
        easySplitDarkOrange: {
            light: '#6b2929'
        },
        easySplitGoldenBrown: {
            light: '#8D6708'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1600,
            xl: 1920,
        }
    },
    typography: {
        fontFamily: 'SegoeUI, Arial, Helvetica, sans-serif',
        fontWeightLight: '200',
        fontWeightSemilight: '300',
        fontWeightNormal: '400',
        fontWeightSemibold:  '500' 
    },
    spacing: factor => `${0.125 * factor}rem`, //2
});

theme.overrides = {
    ...theme.overrides,
    MuiPaper: {
        root: {
            padding: theme.spacing(8)
        }
    },
    MuiCardContent: {
        root: {
            padding: 0,
            "&:last-child": {
                paddingBottom: 0
            }
        }
    },
    MuiDivider: {
        root: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8)
        }
    },
    MuiTypography: {
        h1: {
            fontSize: '2.5em',
            fontWeight: theme.typography.fontWeightSemibold,
            lineHeight: 'unset',
            marginBottom: '0.5rem'
        },
        h2: {
            fontSize: '1.75em',
            fontWeight: theme.typography.fontWeightSemibold,
            paddingBottom: theme.spacing(8)
        },
        h3: {
            fontSize: '1.5em',
            fontWeight: theme.typography.fontWeightSemibold
        },
        h4: {
            fontSize: '1.25em',
            fontWeight: theme.typography.fontWeightSemibold
        },
        h5: {
            fontSize: '1.15em',
            fontWeight: theme.typography.fontWeightSemibold
        },
        h6: {
            fontSize: '1em',
            fontWeight: theme.typography.fontWeightSemibold
        }
    },
    MuiButton: {
        root: {
            textTransform: 'none',
            borderRadius: 0,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.easySplitWhite.main,
            '&:hover': {
                backgroundColor: '#243A5E',
                outlineColor: '#243A5E',
                color: '#ffffff'
            }
        }
    },
    MuiOutlinedInput: {
        root: {
            borderRadius: 0,
            transition: 'none'
        },
        input: {
            paddingTop: '0.5em',
            paddingBottom: '0.5em'
        },
        adornedEnd: {
            paddingRight: 0
        }
    },
    MuiFormControl: {
        root: {
            maxWidth: '100%'
        }
    },
    MuiInput: {
        root: {
            border: '1px solid #A6A6A6',
            transition: 'none',
            '&$error': {
                borderColor: "#d83b01"
            }
        },
        input: {
            paddingLeft: '4px',
            paddingRight: '4px'
        },
        formControl: {
            'label + &': {
                marginTop: 0
            }
        }
    },
    MuiSelect: {
        root: {
            borderRadius: '0'
        },
        select: {
            lineHeight: '2em',
            height: '2em',
            paddingTop: 0,
            paddingBottom: 0
        },
        outlined: {
            borderRadius: 0
        }
    },
    MuiFormLabel: {
        root: {
            color: '#505050',
            fontWeight: theme.typography.fontWeightSemibold,
            marginBottom: '0.5em'
        }
    },
    MuiFormHelperText: {
        root: {
            color: '#d83b01'
        },
        contained: {
            marginLeft: 0
        }
    },
    MuiCard: {
        root: {
            borderRadius: 0
        }
    },
    MuiPopover: {
        paper: {
            borderRadius: '0'
        }
    },
    MuiTabs: {
        root: {
            backgroundColor: theme.palette.easySplitWhite.main,
            borderBottom: '1px solid #e8e8e8'
        },
        indicator: {
            backgroundColor: theme.palette.easySplitBlue.light
        }
    },
    MuiTab: {
        root: {
            textTransform: 'none',
            minWidth: 72,
            fontWeight: theme.typography.fontWeightNormal,
            marginRight: theme.spacing(4),
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.easySplitDarkGray.main,
            '&:hover': {
                color: theme.palette.easySplitBlueHover.light,
                opacity: 1
            },
            '&$selected': {
                color: theme.palette.easySplitBlue.light,
                fontWeight: theme.typography.fontWeightSemibold
            },
            '&:focus': {
                color: theme.palette.easySplitBlueHover.light,
                border: '1px solid #0078D4'
            }
        }
    },
    MuiToolbar: {
        regular: {
            '@media (min-width: 600px)': {
                minHeight: "3rem"
            }
        }
    },
    MuiButtonBase: {
        root: {
            "&$focusVisible": {
                "outline": "1px solid #0078D4"
            }
        }
    },
    MuiDialog: {
        paper: {
            fontSize: '1em'
        }
    },
    MuiDialogTitle: {
        root: {
            background: theme.palette.contrastBackground.light,
            padding: theme.spacing(8),
            marginTop: theme.spacing(-8),
            marginLeft: theme.spacing(-8),
            marginRight: theme.spacing(-8),
            '& h2': {
                fontSize: '1.5em',
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: theme.spacing(8),
                paddingRight: theme.spacing(8),
                fontWeight: theme.typography.fontWeightLight
            }
        }
    },
    MuiDialogContent: {
        root: {
            padding: theme.spacing(8),
            '& h3': {
                fontSize: '1.25em',
                paddingBottom: 0
            }
        }
    },
    MuiDialogActions: {
        root: {
            padding: `0 1rem 1rem`
        }
    },
    MuiCheckbox: {
        root: {
            padding: '4px 9px'
        }
    },
    MuiInputLabel: {
        formControl: {
            top: 'undefined',
            left: 'undefined',
            position: 'undefined',
            transform: 'undefined'
        }
    },
    MuiLink: {
        root: {
            color: '#0074cc'
        }
    }
}

export default theme