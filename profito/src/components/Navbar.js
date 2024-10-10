import Link from "next/link";

export default function Navbar(){
    return(
      <div className="mt-5">
          <nav>
          <ul className="flex flex-row gap-24 justify-end px-4">
            <li><Link href="/">Home</Link> </li>
            <li><Link href="/about">About</Link> </li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>       
        </nav>
      </div>
      
    
    );
}