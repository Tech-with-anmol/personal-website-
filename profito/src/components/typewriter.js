import { Typewriter } from "react-simple-typewriter";

export default function TypewriterComponent() {
    return(
        <div className="typewriter">
            <Typewriter
              words={['Gretting!', 'How has been your day?', 'I am anmol :D', 'So wanna know more?', 'type {help} in terminal to know more xD.', 'Just know this site is still under development']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}   
            />
        </div>
    )
}