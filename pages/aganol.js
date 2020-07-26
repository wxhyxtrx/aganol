import Head from 'next/head'
import Link from 'next/link'
import Menu from '../component/menu'
import Footer from '../component/footer'
function beranda(){
    return(
        <div>
            <Head>
                <title>Aganol</title>
                <link rel="icon"  href="img/icon.png"/>
                <link rel="stylesheet" href="css/page1.css"/> 
            </Head>
            <Menu></Menu>
            <section>
                <h2>Selamat datang di platform <b >Aganol</b> </h2>
                <p>Aganol membantumu untuk menjalankan interaksi siswa dengan guru saat magang</p>      
                <h2></h2>
                <p></p>
                <div className="bglist" >
                <div className="photocard">
                    <img src="svg/task.svg"/>
                </div>
                <div className="titlecard">
                    <h4>Membuat laporan tugas harian</h4>
                </div>
                </div>
                <div className="bglist">
                    <div className="photocard">
                        <img src="svg/map.svg" />
                    </div>
                    <div className="titlecard">
                        <h4>Berbagi Lokasi tempat dan tujuan</h4>
                    </div>
                </div>
                <div className="bglist">
                    <div className="photocard">
                        <img src="svg/task2.svg"/>
                    </div>
                    <div className="titlecard">
                        <h4>Memberikan penilaian dengan cepat dan tepat</h4>
                    </div>
                </div>
                <div className="bglist">
                    <div className="photocard">
                        <img src="svg/team.svg"/>
                    </div>
                    <div className="titlecard">
                        <h4>Berbagi informasi sesama patner</h4>
                    </div>
                </div>
                <div className="bglist">
                    <div className="photocard">
                        <img src="svg/deal.svg" />
                    </div>
                    <div className="titlecard">
                        <h4>Menjalin kerjasama dengan Relasi</h4>
                    </div>
                </div>
            </section>
            <div className="task">
                <h3>Jurusan paling dicari</h3>
                <label className="muat">Muat ulang..</label>
                <div className="bgjurusan">
                    <img src="img/tkj.png"/>
                    <label><b>Teknik Komputer & Jaringan</b></label><br/>
                    <p>200 Perusahaan</p>
                </div>
                <div className="bgjurusan">
                    <img src="img/rpl.png"/>
                    <label><b>Rekaya Perangkat Lunak</b></label><br/>
                    <p>200 Perusahaan</p>
                </div>
                <div className="bgjurusan">
                    <img src="img/mm.png"/>
                    <label><b>Multimedia</b></label><br/>
                    <p>200 Perusahaan</p>
                </div>
                <div className="bgjurusan">
                    <img src="img/chef.png"/>
                    <label><b>Tata Boga</b></label><br/>
                    <p>200 Perusahaan</p>
                </div>
                <div className="next">
                    <img src="img/right.png"/>
                </div>
            </div>
            <div className="industri"> 
                <Link href="/industri">           
                <div className="bgindustri">
                    <img src="img/bri.jpg"/>
                    <h3>BANK BRI Banyuwangi</h3>
                    <b>Akuntasi</b>
                    <label><img src="img/lok.png"/>Banyuwangi</label>
                    <img id="rate" src="img/rate.png"/><span id="tesrate">(32)</span>
                    <button>Lihat</button>
                </div>
                </Link>
                <Link href="/industri">
                <div className="bgindustri">
                    <img src="img/ramayan.jpg"/>
                    <h3>Ramayana Banyuwangi</h3>
                    <b>Pemasaran</b>
                    <label><img src="img/lok.png"/>Banyuwangi</label>
                    <img id="rate" src="img/rate.png"/><span id="tesrate">(32)</span>
                    <button>Lihat</button>
                </div>
                </Link>
                <Link href="/industri">
                <div className="bgindustri">
                    <img src="img/telkom.png"/>
                    <h3>Telkom Banyuwangi</h3>
                    <b>Tehnik Komputer & Jaringan</b>
                    <label><img src="img/lok.png"/>Banyuwangi</label>
                    <img id="rate" src="img/rate.png"/><span id="tesrate">(32)</span>
                    <button>Lihat</button>
                </div>
                </Link>
                <Link href="/industri">
                <div className="bgindustri">
                    <img src="img/ilira.jpg"/>
                    <h3>Hotel Illira Banyuwangi</h3>
                    <b>Perhotelan</b>
                    <label><img src="img/lok.png"/>Banyuwangi</label>
                    <img id="rate" src="img/rate.png"/><span id="tesrate">(32)</span>
                    <button>Lihat</button>
                </div>
                </Link>
            </div>
            <div className="other">
                <h2>Jurusan</h2>
                <div className="bgbox">
                    <div className="box">
                        <div className="kolom">
                            <img src="icon/networking-server-svgrepo-com.svg"/>
                            <a href="#">Tehnik Komputer & Jaringan</a>
                        </div>
                        <div className="kolom">
                            <img src="icon/html-svgrepo-com.svg"/>
                            <a href="#">Rekayasa Perangkat lunak</a>
                        </div>
                        <div className="kolom">
                            <img src="icon/play-button-movie-svgrepo-com.svg"/>
                            <a href="#">Multimeida</a>
                        </div>
                        <div className="kolom" >
                            <img src="icon/dancer-svgrepo-com.svg"/>
                            <a href="#" >Seni Tari</a>
                        </div>
                        <div className="kolom" >
                            <img src="icon/hotel-svgrepo-com.svg"/>
                            <a href="#">Akomodasi Perhotelan</a>
                        </div>
                        <div className="kolom" >
                            <img src="icon/graphic-design-svgrepo-com.svg"/>
                            <a href="#">Design Komunikasi Visual</a>
                        </div>
                        <div className="kolom" >
                            <img src="icon/money-svgrepo-com.svg"/>
                            <a href="#">Akuntasi</a>
                        </div>
                        <div className="kolom" >
                            <img src="icon/mechanic-svgrepo-com.svg"/>
                            <a href="#" >Tehnik Kendaraan Ringan</a>
                        </div>
                    </div>
                </div>
                <h2>Sekolah</h2>
                <div className="bgbox">
                    <div className="box">
                        <div class="kolom">
                            <img src="skl/Smkn1bwi.jpg"/>
                            <a href="#">SMK Negeri 1 Banyuwangi</a>
                        </div>
                        <div className="kolom">
                            <img src="skl/Smkglagah.jpg"/>
                            <a href="#">SMKN 1 Glagah</a>
                        </div>
                        <div className="kolom">
                            <img src="skl/kalibaru.png"/>
                            <a href="#">SMKN 1 Kalibaru</a>
                        </div>
                        <div className="kolom">
                            <img src="skl/puro.jpg"/>
                            <a href="#">SMKN 1 Kalipuro</a>
                        </div>
                        <div className="kolom">
                            <img src="skl/wongsorjo.png"/>
                            <a href="#">SMK Negeri Wongsorejo</a>
                        </div>
                        <div className="kolom">
                            <img src="icon/graphic-design-svgrepo-com.svg"/>
                            <a href="#">SMK Negeri Tegalsari</a>
                        </div>
                        <div className="kolom">
                            <img src="icon/money-svgrepo-com.svg"/>
                            <a href="#">SMKN Darul Ulum Muncar</a>
                        </div>
                        <div className="kolom">
                            <img src="icon/mechanic-svgrepo-com.svg"/> 
                            <a href="#" className="lastschool">SMKN Ihya Ulumudin Singojuruh</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default beranda