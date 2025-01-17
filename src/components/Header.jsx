import InputSearch from "./InputSearch"
import Logo from "./Logo"
import CarouselOfItems from "./CarouselOfItems";

const Header = () => {
  return (
    <header className="pt-4">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex items-center flex-col gap-8 lg:flex-row lg:justify-between pb-6">
          <Logo />
        
          <InputSearch />
        </div>
      
        <CarouselOfItems />
      </div>
    </header>
  )
}

export default Header