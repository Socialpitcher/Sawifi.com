import Card from './Card'
import Heading from './Heading'
import CardLoading from './CardLoading'

const Cards = ({data}) => {

  return data ? (
    <div id='service-cards' className='w-full mt-12 md:mt-0'>
        <Heading text='Discounted Packages:' />
        <div className='w-[95%] md:w-[90%] gap-y-5 md:gap-y-6 mx-auto grid gap-x-auto md:grid-cols-3 flex-wrap mt-5 md:mt-8'>
            {data.map((e,i) => <Card key={i} data={e}/>)}
        </div>
    </div>
  ) : (<CardLoading/>)
}


export default Cards