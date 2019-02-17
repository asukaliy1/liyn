
import React from 'react'
//import Helmet from 'react-helmet'
import 'ress'
import Footer from './footer'
import Header from './header'

import styled from 'styled-components'

const Template = (props) => {
  return (
    <Container>
      {/* <Helmet>
        <html lang="ja" />
        <meta
          name="google-site-verification"
          content="Ea1K1N5NXjUJEV6XxsrA2va96TOyyIyuSdQE5gLLNu4"
        />
      </Helmet> */}
      <Header location={props.location} />
      <div>{props.children}</div>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  font-family: -apple-system-body, BlinkMacSystemFont,"Arial", "FangSong", "Helvetica Neue",
    "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans Japanese",
    "游ゴシック  Medium", "Yu Gothic Medium", "メイリオ", meiryo, sans-serif;
  @media screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`

export default Template