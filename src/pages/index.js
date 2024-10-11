import Head from "next/head";
import Navbar from '../components/Navbar';
import Link from "next/link";
import TypewriterComponent from "@/components/typewriter";
import TerminalComponent from "../components/terminal";
import SnowfallComponent from "@/components/snow";
 


export default function Home(){
    return(
        <div>
            <Head>
                <title>Profito</title>
                <meta name="profito" content="quick site update"/>               
               
            </Head>
            <div className="navbar-container bg-cover bg-slate-400 bg-center h-20">
                <img src="images/gamenavart.jpg"  className="absolute inset-0 w-full h-full object-contain " />
            </div>
            <main className="bg-black">
                   <SnowfallComponent/>
                   <audio id="background-audio" src="background.mp3" loop autoPlay muted></audio>

<div className="fixed bottom-4 right-4 z-50">
  <button
    onClick={() => {
      document.getElementById('background-audio').muted = false;
      document.getElementById('background-audio').play();
    }}
    className="bg-white text-amber-500 font-bold rounded shadow-lg transform transition-all duration-300 ease-in-out flex items-center justify-center"
    style={{ width: '50px', height: '50px' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M8 5v14l11-7z" />
    </svg>
  </button>
</div>


                    <article className="prose lg:prose-xl bg-black" >
                    <div className="flex justify-left">
                    <h4 className="text-left font-bold font-mono text-amber-200 px-5"><TypewriterComponent/></h4>
                    
                    </div>
                </article>
                <TerminalComponent/>
            </main>
        </div>
    );
}