
import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

export default ({children}) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)
