import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../../button'
import { Link } from 'react-router-dom'

const check4Header = () => {
  return (
    <>
      <Link to={'/roadmap'}>
        <Button className="mt-2 w-fit rounded-3xl border px-2 py-2">
          <div className="flex flex-row items-center gap-1">
            <ChevronLeft />
            <h1 className="pr-2">Return to Roadmap</h1>
          </div>
        </Button>
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl border bg-violet-300 pb-4 shadow-lg dark:bg-violet-950">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex flex-col gap-3 px-3 py-2"
        >
          <h1 className="text-2xl font-semibold">Welcome to Checkpoint 4!</h1>
          <p className="text-sm">
            Bu aşamada ilerlemeniz gereken toplam 2 yol bulunmakta. Bunlar
            sırasıyla kitaplar ve makalelerdir. Bu heyecan dolu maceranın son
            adımında tam verimle çalışabilmek için aşağıdaki linklerin içindeki
            yazan görevleri tamamlamanız gerekmektedir. Aşağıda toplam iki adet
            link bulunmaktadır. Bu linkler size kuantum evrenini kitap ve
            makalelerle anlatarak gelişiminize destek vermektedir. Bu adımda hem
            eğlenecek hem de kendinize birçok yeni bilgi katacaksınız.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default check4Header
