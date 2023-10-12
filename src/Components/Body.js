import Home from '../icons_assets/restauranfood.jpg'
import './style.css'
import Card from './Card';
const Body = ()=>{
    return(
        <main>
            <section className='section1'>
                <div>
                    <h2 className="section1-heading">Little Lemon</h2>
                    <h4 className="section1-subheading">Chicago</h4>
                    <p className="section1-text">We are family owned Mediteranean Restaurant, focused on traditional recipes  served with a modern twist</p>
                    <button className='button2'>Reserve a table</button>
                </div>
                <img className='home' src={Home}></img>
            </section>
            <section className="section2">
                <section className='heading-section'>
                    <h2 className="section2-heading">This weeks specials!</h2>
                    <button className='button2'>Online Menu</button>
                </section>
                <section className='inner-section'>
                    <Card className='specials-card'/>
                    <Card className='specials-card'/>
                    <Card className='specials-card'/>
                </section>
            </section>
        </main>
    )
}

export default Body;