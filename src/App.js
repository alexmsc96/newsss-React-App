import React from 'react'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import NewsCards from './containers/NewsCards/NewsCards'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
      <Layout>
        <Header />
        <NewsCards />
        <Footer />
      </Layout>
  );
}


export default App;