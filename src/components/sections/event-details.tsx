"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Event } from "@/types/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventDetailsProps {
  event: Event;
}

export function EventDetails({ event }: EventDetailsProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white ">
      <div className="container mx-auto px-4 pt-20 sm:pt-24 md:pt-28 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bomber-escort-expand text-green-400 mb-2">
            {event.name}
          </h1>
          <p className="text-xl text-gray-300">{event.details.tagline}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Poster */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative lg:h-full"
          >
            <Card className="bg-gray-900 border-green-400/30 lg:h-full">
              <CardContent className="p-6 lg:h-full">
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-full overflow-hidden rounded-lg bg-gray-800">
                  {event.details.posterUrl ? (
                    <Image
                      src={event.details.posterUrl}
                      alt={`${event.name} Poster`}
                      fill
                      className={`object-contain transition-opacity duration-500 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
                      <span className="text-2xl font-bomber-escort-expand text-green-400">
                        {event.name}
                      </span>
                    </div>
                  )}
                  {!imageLoaded && event.details.posterUrl && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2b4539] via-gray-900 to-black flex items-center justify-center">
                      {/* Animated loader */}
                      <div className="flex flex-col items-center justify-center space-y-6">
                        {/* Spinning ring loader */}
                        <div className="relative">
                          {/* Outer ring */}
                          <motion.div
                            className="w-16 h-16 rounded-full border-2 border-[#61dca3]/20"
                            animate={{ rotate: 360 }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                          />
                          {/* Inner spinning ring */}
                          <motion.div
                            className="absolute inset-0 w-16 h-16 rounded-full border-2 border-transparent border-t-[#61dca3] border-r-[#61dca3]"
                            animate={{ rotate: 360 }}
                            transition={{ 
                              duration: 1, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                          />
                          {/* Center pulse */}
                          <motion.div
                            className="absolute inset-3 bg-[#61dca3]/30 rounded-full"
                            animate={{ 
                              scale: [0.8, 1.2, 0.8],
                              opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          />
                        </div>
                        
                        {/* Loading text with typewriter effect */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-center"
                        >
                          <motion.p 
                            className="text-[#61dca3] font-bomber-escort-expand text-lg mb-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                          >
                            Loading Event
                          </motion.p>
                          <motion.div 
                            className="text-white/70 font-bomber-escort text-sm"
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: 0.5 
                            }}
                          >
                            {event.name}
                          </motion.div>
                        </motion.div>
                        
                        {/* Loading dots */}
                        <div className="flex space-x-2">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-[#61dca3] rounded-full"
                              animate={{ 
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.4, 1, 0.4] 
                              }}
                              transition={{ 
                                duration: 1, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: i * 0.2 
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Event Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 lg:h-full lg:flex lg:flex-col"
          >
            <Card className="bg-gray-900 border-green-400/30 lg:flex-1">
              <CardHeader>
                <CardTitle className="text-green-400 font-bomber-escort-expand">
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:h-full lg:flex lg:flex-col lg:justify-between">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed font-bold">
                    {event.details.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-green-400 font-bomber-escort-expand mb-1">
                        Date
                      </h4>
                      <p className="text-white font-extrabold">
                        {event.details.date}
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-green-400 font-bomber-escort-expand mb-1">
                        Time
                      </h4>
                      <p className="text-white font-extrabold">
                        {event.details.time}
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-green-400 font-bomber-escort-expand mb-1">
                        Venue
                      </h4>
                      <p className="text-white font-extrabold">
                        {event.details.venue}
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-green-400 font-bomber-escort-expand mb-1">
                        Prize Pool
                      </h4>
                      <p className="text-white font-extrabold text-lg">
                        {event.details.prizePool}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gray-900 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400 text-center font-bomber-escort-expand">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-400 text-center font-bomber-escort-expand">
                  For any queries regarding {event.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.details.contacts.map((contact, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-white font-bomber-escort-expand text-lg mb-2 ">
                        {contact.name}
                      </h4>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-green-400 hover:text-green-300 transition-colors font-extrabold"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-black font-bomber-escort-expand px-8 py-3 text-lg flex-1 cursor-target"
                onClick={() =>
                  window.open(event.details.registrationUrl, "_blank")
                }
              >
                Register Now
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bomber-escort-expand px-8 py-3 text-lg flex-1 cursor-target"
                  >
                    Guidelines
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white border-green-400/30 max-w-6xl w-[95vw] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-green-400 text-xl md:text-2xl font-bomber-escort-expand">
                      {event.name} - Guidelines
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 md:space-y-6 mt-4 w-full">
                    {event.details.guidelines.map((guideline, index) => (
                      <div key={index} className="bg-gray-800 p-4 md:p-6 rounded-lg w-full">
                        <h4 className="text-green-400 font-semibold mb-3 md:mb-4 text-sm md:text-base">
                          {guideline.title}
                        </h4>
                        <ul className="text-gray-300 space-y-2 md:space-y-3">
                          {guideline.content
                            .split('.')
                            .filter(point => point.trim().length > 0)
                            .map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start">
                                <span className="text-green-400 mr-2 md:mr-3 flex-shrink-0 mt-0.5">•</span>
                                <span className="text-xs md:text-sm leading-relaxed mt-1">
                                  {point.trim()}.
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>



        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <Link href="/#events">
            <Button
              variant="ghost"
              className="text-green-400 hover:text-green-300 hover:bg-gray-800 cursor-target"
            >
              ← Back to Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
