import ListOfTopics from './ListOfTopics'
import CarouselBtn from './CarouselBtn';

const CarouselOfTopics = () => {
  
  return (
    <div className="relative my-10">
      <CarouselBtn direction='left' />

      <ListOfTopics />

      <CarouselBtn direction='right' />
    </div>
  )
}

export default CarouselOfTopics