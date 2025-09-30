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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 pt-25 sm:pt-24 md:pt-28 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-2 mt-10 font-bomber-escort-expand">
            {event.name}
          </h1>
          <p className="text-xl text-gray-300 font-bomber-escort-expand">
            {event.details.tagline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Poster */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-gray-900 border-green-400/30">
              <CardContent className="p-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-800">
                  <Image
                    src={event.details.posterUrl}
                    alt={`${event.name} Poster`}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-400 font-bomber-escort-expand">
                        {event.name}
                      </span>
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
            className="space-y-6"
          >
            <Card className="bg-gray-900 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400 font-bomber-escort-expand tracking-wide">
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed font-bomber-escort-expand tracking-wide">
                  {event.details.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-green-400 mb-1 font-bomber-escort-expand">
                      Date
                    </h4>
                    <p className="text-white font-bomber-escort-expand tracking-wide">
                      {event.details.date}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-green-400 mb-1 font-bomber-escort-expand">
                      Time
                    </h4>
                    <p className="text-white font-monserrat-extrabold font-bomber-escort-expand mb-2">
                      {event.details.time}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-green-400 mb-1 font-bomber-escort-expand">
                      Venue
                    </h4>
                    <p className="text-white font-bomber-escort-expand">
                      {event.details.venue}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-green-400 font-bomber-escort-expand mb-1">
                      Prize Pool
                    </h4>
                    <p className="text-white font-bomber-escort-expand text-lg">
                      {event.details.prizePool}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-black font-bomber-escort-expand px-8 py-3 text-lg flex-1"
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
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bomber-escort-expand px-8 py-3 text-lg flex-1"
                  >
                    Guidelines
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white border-green-400/30 max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-green-400 text-xl">
                      {event.name} - Guidelines
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    {event.details.guidelines.map((guideline, index) => {
                      const lines = guideline.content
                        .split("\n")
                        .filter((line) => line.trim() !== "");
                      return (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-green-400 mb-2">
                            {guideline.title}
                          </h4>
                          <ul className="text-gray-300 space-y-2 list-disc list-inside">
                            {lines.map((line, idx) => (
                              <li key={idx}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Card className="bg-gray-900 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-green-400 text-center font-bomber-escort-expand ">
                Contact Information
              </CardTitle>
              <CardDescription className="text-gray-400 text-center font-bomber-escort-expand ">
                For any queries regarding {event.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {event.details.contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg text-center"
                  >
                    <h4 className="text-white  text-lg mb-2  font-bomber-escort-expand">
                      {contact.name}
                    </h4>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-green-400 hover:text-green-300 transition-colors leading-relaxed font-monserrat-extrabold tracking-wide"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
              className="text-green-400 hover:text-green-300 hover:bg-gray-800"
            >
              ← Back to Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
