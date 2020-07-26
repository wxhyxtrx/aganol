import Head from 'next/head'
import Menu from '../component/menu'
import Footer from '../component/footer'
function industri(){
    return(
        <div>
            <Head>
                <title>Aganol</title>
                <link rel="icon"  href="img/icon.png"/>
                <link rel="stylesheet" href="css/page1.css"/> 
            </Head>
            <Menu></Menu>
            <center>
                <img className="loading" src="img/load3.gif"/>
            </center>
            <Footer></Footer>
            <style jsx>{`
                .loading{
                    width:480px;
                    margin-top:30px;
                }
            `}
            </style>
        </div>
    )
}
export default industri;