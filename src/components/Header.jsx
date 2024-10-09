import InputSearch from "./InputSearch"
import ListOfTopics from "./ListOfTopics"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4 lg:px-0 flex items-center flex-col gap-8 lg:flex-row lg:justify-between">
        <Logo />
      
        <InputSearch />
      </div>

      <ListOfTopics />
    </header>
  )
}

export default Header