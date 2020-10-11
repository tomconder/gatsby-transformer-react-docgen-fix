import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Button from '../conflicting-components/button'
import DatePicker from '../conflicting-components/datepicker'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Button type="button" text="This is a test" />
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <DatePicker />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
