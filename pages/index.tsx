
import Link from 'next/link'
import { useState } from 'react'
import Category from '../src/components/Category'
import RuleModal from '../src/components/RuleModal'
import Seo from '../src/components/Seo'


export default function Home() {

  const [ruleOpen,setRuleOpen]=useState<boolean>(false)

  const ruleHandler=()=>{
    setRuleOpen((prev)=>!prev)
  }

  console.log(ruleOpen)

  return (
    <>
      <Seo/>
     
      <main className='w-screen min-h-screen'>
        <div className='bg-kayan h-screen w-screen flex justify-center items-center'>
        <div className='md:w-[500px] w-[90%] p-3'>
      
        <Link href={"/game"}>
        <Category background='bg-panyaung' label='PLAYER VS CPU' isCpu={true}/>
        </Link>
        <Link href={"/game"}>
        <Category background='bg-awar' label='PLAYER VS PLAYER'/>
        </Link>
        <Category onClick={ruleHandler} background='bg-white' label='GAME RULES' isRule={true}/>
        </div>
        </div>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <RuleModal onClick={ruleHandler} open={ruleOpen} />
        </div>
      </main>
    </>
  )
}
