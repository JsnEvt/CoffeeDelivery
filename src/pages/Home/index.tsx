import { OurCoffees } from './components/OurCoffees';
import { Intro } from './components/Intro';
import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}