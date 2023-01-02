
import Category from '../src/components/Category'
import Seo from '../src/components/Seo'


export default function Home() {
  return (
    <>
      <Seo/>
      <main className='bg-kayan h-screen w-screen flex justify-center items-center'>
        <div className='md:w-[500px] w-[90%] p-3'>
          
        <Category background='bg-panyaung' label='PLAYER VS CPU' isCpu={true}/>
        <Category background='bg-awar' label='PLAYER VS PLAYER'/>
        <Category background='bg-white' label='GAME RULES' isRule={true}/>
   
        </div>
      </main>
    </>
  )
}
