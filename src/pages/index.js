import * as React from "react"
import { Link } from "gatsby"

import infecBackgroundMenu from "../images/infecBackgroundMenu.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Infection" />
    <h1>Releases</h1>
    <h3>Download the zip file from google drive and play!</h3>
 

    <p>
      <a href="https://drive.google.com/file/d/1N6l1kq6Ym2R4X0bxuGgtYUknU-yQsxfB/view?usp=sharing">MAC OS Zip</a> <br />
      <a href="https://drive.google.com/file/d/1QS6EYMpK6dV46QbvkEun8EaeZqHmEaL0/view?usp=sharing">Windows Zip</a>
    </p>
    <p>
      <h6>MILESTONE 2</h6>
      <a href="https://drive.google.com/file/d/15LfYd6_YNMiDHbUdeFONekxz3E-YjU1k/view?usp=sharing">Windows Zip</a>
    </p>

    <h6>Class Demo</h6>
    <a href="https://drive.google.com/drive/folders/1a9vc3LD9AJy686RMeoucrMqoNNexFPRo?usp=sharing">Windows zip</a>
  </Layout>
)

export default IndexPage
