import { getTopics } from '@/services/getDataFromAPI';
import ListOfItems from './ListOfItems';

const CarouselOfItems = async () => {

  const topics = await getTopics();
  
  return (
    <ListOfItems items={topics} type='topics' />
  )
}

export default CarouselOfItems;