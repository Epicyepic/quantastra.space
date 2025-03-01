import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MonitorPlay, Clapperboard, BookText } from 'lucide-react'
import 'swiper/css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import moviesContent from './moviesContent.json'
import seriesContent from './seriesContent.json'
import booksContent from './booksContent.json'
import { useLanguage } from '../../../../context/LanguageContext';

const movieContent = moviesContent
const serieContent = seriesContent
const bookContent = booksContent

const translations = {
  en: {
    h1: 'TV series suggestions',
  },
  tr: {
    h1: 'Dizi önerileri',
  },
};

const check1Body = () => {
  const { language } = useLanguage();
  return (
    <>
      <motion.div
        initial={{ y: -178 }}
        animate={{ y: -30 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        className="rounded-2xl border bg-neutral-100 shadow-lg dark:bg-neutral-900 lg:hidden"
      >
        <div className="py-3">
          {/* Recommended series */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <MonitorPlay />
                    {translations[language].h1}
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az
                    birini izlemeniz gerekmektedir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {serieContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="h-40 w-[6.75rem] overflow-hidden rounded-md bg-neutral-700">
                      <img
                        src={content.image}
                        alt=""
                        className="h-full w-full overflow-hidden rounded-md object-cover"
                      />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px] w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>{content.title}</DrawerTitle>
                        <DrawerDescription>
                          {content.description}
                          <h1 className="my-2 mt-4 text-base font-semibold text-neutral-500 dark:text-neutral-400">
                            Kuantumla Alakası:
                          </h1>
                          {content.quantumRelevence.length > 0 && (
                            <ul className="mt-2 list-inside list-disc">
                              {content.quantumRelevence.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Recommended movies */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <Clapperboard />
                    Film önerileri
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az
                    birini izlemeniz gerekmektedir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {movieContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="h-40 w-[6.75rem] overflow-hidden rounded-md bg-neutral-700">
                      <img
                        src={content.image}
                        alt=""
                        className="h-full w-full overflow-hidden rounded-md object-cover"
                      />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px] w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>{content.title}</DrawerTitle>
                        <DrawerDescription>
                          {content.description}
                          <h1 className="my-2 mt-4 text-base font-semibold text-neutral-500 dark:text-neutral-400">
                            Neden İzlenmeli?
                          </h1>
                          <p>{content.whyToWatch}</p>
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Recommended Books */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <BookText />
                    Kitap önerileri
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az
                    birini okumanız gerekmektedir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {bookContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="h-40 w-[6.75rem] overflow-hidden rounded-md bg-neutral-700">
                      <img
                        src={content.image}
                        alt=""
                        className="h-full w-full overflow-hidden rounded-md object-cover"
                      />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px] w-full max-w-sm">
                      <DrawerHeader>
                        <div className="flex flex-col gap-2">
                          <DrawerTitle>{content.title}</DrawerTitle>
                          <DrawerTitle className="text-neutral-500 dark:text-neutral-400">
                            {content.author}
                          </DrawerTitle>
                        </div>

                        <DrawerDescription>
                          {content.description}
                          <h1 className="my-2 mt-4 text-base font-semibold text-neutral-500 dark:text-neutral-400">
                            Neden Okunmalı?
                          </h1>
                          <p>{content.whyToWatch}</p>
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  )
}

export default check1Body
