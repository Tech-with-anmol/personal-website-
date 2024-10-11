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