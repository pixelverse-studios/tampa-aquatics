'use client'

import {
    Check,
    Trophy,
    MessageSquare,
    Mail,
    MapPin,
    ArrowRight
} from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from './ui/card'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import CallToAction from './call-to-action'
import { address, email } from '@/lib/constants'
import AnimatedSection from './animated-section'

const listItemStyles = 'flex gap-4 items-center'

export default function AAUPage() {
    return (
        <section id="aau" className="bg-white scroll-mt-[3rem]">
            <AnimatedSection animation="fadeIn">
                <div className="max-w-custom mx-auto px-6 py-8">
                    <h2 className="text-center">
                        Become a Member of Tampa Aquatics
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
                        <div className="flex flex-col gap-6">
                            <Card className="bg-primary text-white shadow-xl">
                                <CardHeader>
                                    <div className="bg-accent p-4 rounded-full w-fit mb-2">
                                        <Trophy className="text-white" />
                                    </div>
                                    <h3>Join Our AAU Team!</h3>
                                </CardHeader>
                                <CardContent className="gap-6 flex flex-col md:flex-row">
                                    <div className="flex-1">
                                        <p>
                                            Take your swimming journey to the
                                            next level! Join our competitive AAU
                                            swim team and train with experienced
                                            coaches in state-of-the-art
                                            facilities
                                        </p>
                                        <ul className="flex flex-col gap-4 pt-4">
                                            <li className={cn(listItemStyles)}>
                                                <Check className="text-accent" />
                                                <span>
                                                    Professional coaching staff
                                                </span>
                                            </li>
                                            <li className={cn(listItemStyles)}>
                                                <Check className="text-accent" />
                                                <span>
                                                    Structured training programs
                                                </span>
                                            </li>
                                            <li className={cn(listItemStyles)}>
                                                <Check className="text-accent" />
                                                <span>
                                                    Competition opportunities
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-1">
                                        <img
                                            src="/imgs/AAU_Logo.svg"
                                            alt="aau logo"
                                            className="h-[12rem] w-auto m-auto"
                                        />
                                        <p className="text-center mt-4 font-semibold">
                                            Team Code: W3E6D8
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <a
                                        href="https://play.aausports.org/joinaau/memberappdirectorpage.aspx?GuestID=a89ccdbb-bfcf-49ed-be6d-30cd381e41b2"
                                        target="_blank"
                                        className=" w-full sm:w-fit"
                                    >
                                        <Button
                                            variant="ctaAlt"
                                            className="rounded-full font-semibold w-full"
                                        >
                                            Register Now <ArrowRight />
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                            <Card className="bg-primary text-white">
                                <CardHeader>
                                    <div className="bg-accent p-4 rounded-full w-fit mb-2">
                                        <MessageSquare className="text-white" />
                                    </div>
                                    <h3>Learn More About Tampa Aquatics</h3>
                                </CardHeader>
                                <CardContent className="">
                                    <p>
                                        Have questions about our programs,
                                        schedules, or anything else? We're here
                                        to help! Reach out to our team for more
                                        information
                                    </p>
                                    <ul className="flex flex-col gap-4 pt-4">
                                        <a
                                            href={`mailto:${email}`}
                                            className="group relative overflow-hidden"
                                        >
                                            <li className={listItemStyles}>
                                                <Mail className="text-accent" />
                                                <span className="relative">
                                                    {email}
                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                                </span>
                                            </li>
                                        </a>
                                        <li className={listItemStyles}>
                                            <MapPin className="text-accent" />
                                            <span>{address}</span>
                                        </li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <CallToAction
                                        buttonLabel="Contact Us"
                                        variant="ctaAlt"
                                        buttonClass="rounded-full w-full sm:w-fit"
                                    />
                                </CardFooter>
                            </Card>
                        </div>
                        <img
                            className="m-auto rounded-xl shadow-xl"
                            src="/imgs/Contact.jpg"
                            alt="youth swimmer with coach image"
                        />
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
