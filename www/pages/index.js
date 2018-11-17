import React from 'react'
import styled from 'styled-components'
import Page from '../layouts/main'
import { Box, Heading, Button } from 'rebass'
import theme from '../theme'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default () =>
  <Page>
    <Heading fontSize={2}>
      My page
    </Heading>
  </Page>
