import Head from "next/head";
import Navbar from '../components/Navbar';
import Link from "next/link";
import TypewriterComponent from "@/components/typewriter";
import TerminalComponent from "../components/terminal";
 


export default function Home(){
    return(
        <div>
            <Head>
                <title>Profito</title>
                <meta name="profito" content="quick site update"/>               
                <link rel="icon" href="../app/favicon.ico"/>
            </Head>
            <div className="navbar-container bg-cover bg-center h-20">
                <img src="images/gamenavart.jpg"  className="absolute inset-0 w-full h-full object-contain " />
            </div>
            <main>
                
                <article className="prose lg:prose-xl">
                    <div className="flex justify-left">
                    <h4 className="text-left px-5"><TypewriterComponent/></h4>
                    
                    </div>
                </article>
                <TerminalComponent/>
            </main>
        </div>
    );
}