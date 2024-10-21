import ListOfTopics from './ListOfTopics'
import CarouselBtn from './CarouselBtn';

const CarouselOfTopics = () => {
  
  return (
    <div className="relative my-10 border-y-2 border-slate-900">
      <CarouselBtn direction='left' />

      <ListOfTopics />

      <CarouselBtn direction='right' />
    </div>
  )
}

export default CarouselOfTopics