import CarouselOfTopics from "./CarouselOfTopics"
import InputSearch from "./InputSearch"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="pt-4 bg-emerald-200">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex items-center flex-col gap-8 lg:flex-row lg:justify-between">
          <Logo />
        
          <InputSearch />
        </div>
      
        <CarouselOfTopics />
      </div>

    </header>
  )
}

export default Header