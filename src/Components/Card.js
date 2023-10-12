import GreekSalad from '../icons_assets/greek salad.jpg'
import './style.css';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const Card=()=>{
    return(
        <div className='card'>
            <section>
                <img className='card-image' src={GreekSalad}></img>
            </section>
            <section className='card-heading'>
                <p>Greek Salad</p>
                <p>$12.50</p>
            </section>
            <section className='card-text'>
                <p>
                    The famous greek Salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
            </section>
            <section className='card-button'>
                Order a delivery
                <DeliveryDiningIcon color='black' fontSize='small' style={{marginLeft:'1%'}}/>
            </section>
        </div>
    );
}
export default Card;