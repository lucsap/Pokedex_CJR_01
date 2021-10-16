import {Helmet} from "react-helmet";

export default function Main() {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Pokédex</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="teste de title para a main" />
            </Helmet>
            <h1>Ideias</h1>
            <p>Como começamos nossa página principal?</p>
        </div>
    )
}