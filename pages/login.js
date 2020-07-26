import Head from 'next/head'
export default function login(){
    return(
        <div>
            <Head>
                <title>Aganol</title>
                <link rel="icon" href="img/icon.png"/>
                <link rel="stylesheet" href="css/style.css"/> 
            </Head> 
            <body>
                <section>
                    <form action="/aganol">
                    <div className="b-login">
                        <img class="logo" src="img/logo.png"/>
                        <input type="text" class="txtbox" placeholder="Username"/>
                        <input type="password" class="txtbox" placeholder="Password"/>
                        <a href="#">Lupa password ?</a>
                        <input type="submit" value="Login" class="btn"/>
                    </div>
                    </form>
                </section>
            </body>
        </div>
    )
}