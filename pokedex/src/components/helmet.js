import { Helmet } from "react-helmet"

const Titles = ({title}) => {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
    )
  }

export default Titles
