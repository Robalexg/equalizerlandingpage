import './Header.css'

const Header = () => {
    return(
        <header className='header--container'>
            <div className='header--text'>
                <img className='header--logo' src="../images/logo.svg" alt="" />
                <h1>We make your music sound extraordinary.</h1>
                <h2>
                    A system audio equalizer specifically designed for Android 
                    and iOS. Freely tune the way your music sounds with a 
                    professional grade parametric EQ & volume mixer. Control
                    bass, mids, treble, gain control, reverb, and more!
                </h2>
            </div>
            <img id="header--pattern" src="../images/bg-pattern-1.svg" alt="" />
        </header>
    )
}

export default Header