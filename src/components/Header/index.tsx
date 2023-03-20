import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to='/'>
          <img src={logo} />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            Recife, PE
          </HeaderButton>
          <NavLink to='/completeOrder'>
            <HeaderButton variant='yellow'>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={28} weight='fill' />
            </HeaderButton>
          </NavLink>

        </HeaderButtonContainer>
      </div>
    </HeaderContainer >
  )
}