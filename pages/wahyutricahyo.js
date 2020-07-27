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
            <body>
                <section>
                    <div className="profil">
                        <img src="/img/x.jpg"/>
                        <b>Wahyu Tricahyo Mulyo</b><br/>
                        <label>SM4.1 | 1118101579</label>
                        <p>Stikom PGRI Banyuwangi ~ Tehnik Informatika</p>
                        <button className="wa">Whatsapp</button> <button className="mail">Message</button>
                    </div>
                    <div className="bglist" id="listmargin">
                        <div className="photocard">
                            <img src="img/html.png"/>
                        </div>
                    </div>
                    <div className="bglist">
                        <div className="photocard">
                            <img src="img/css.png" />
                        </div>
                    </div>
                    <div className="bglist">
                        <div className="photocard">
                            <img className="php" src="img/php.png"/>
                        </div>
                    </div>
                    <div className="bglist">
                        <div className="photocard">
                            <img src="img/js.png"/>
                        </div>
                    </div>
                <div className="bglist">
                    <div className="photocard">
                        <img className="next" src="img/next.png" />
                    </div>
                </div>
                </section>
            </body>
            <Footer></Footer>
            <style jsx>{`
                .profil{
                    float:left;
                    width:100%;
                    height:300px;
                    background:white;
                    box-shadow:0px 0px 5px #eaeaea;
                    border-radius:5px;
                    margin-bottom:30px;
                }
                .profil img{
                    float:left;
                    width:200px;
                    border-radius:100%;
                    margin-left:150px;
                    margin-top:50px;
                }
                .profil b{
                    float:left;
                    width:70%;
                    font-size:35px;
                    margin-top:70px;
                    margin-left:50px;
                }
                .profil label ,p {
                    float:left;
                    margin-top:10px;
                    margin-left:50px;
                    width:70%;
                    color:gray;
                    font-family:sans-serif;
                    font-size:17px;
                }
                .profil button{
                    cursor:pointer;
                    float:left;
                    color:white;
                    outline:none;
                    width:100px;
                    height:35px;
                    margin:10px;
                    border:0px;
                    border-radius:3px;
                }
                .profil .wa{
                    margin-left:50px;
                    background:#4CAF50;
                }
                .profil .mail{
                    background:white;
                    margin-left:0px;
                    border:2px solid #E53935;
                    color:#E53935;
                }
                section{
                    padding:0px;
                    width:100%;
                    height:auto;
                    padding-bottom:30px;
                }
                .bglist{
                    height:250px;
                    width:185px;
                    margin:10px;
                }
                .bglist .php{
                    margin-top:60px;
                }
                .bglist .next{
                    margin-top:30px;
                }
                #listmargin{
                    margin-left:165px;
                }
            `}
            </style>
        </div>
    )
}
export default industri;