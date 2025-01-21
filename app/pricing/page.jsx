'use client'
import React from 'react'
import TabNavigationHeader from '../_components/TabNavigationHeader'
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for side projects and hobbies",
    features: [
      "1 Project",
      "5 Users",
      "Basic Analytics",
      "24/7 Support",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$15",
    description: "Ideal for small teams and growing businesses",
    features: [
      "10 Projects",
      "25 Users",
      "Advanced Analytics",
      "Priority Support",
      "Custom Domains",
      "Team Collaboration",
    ],
    buttonText: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited Projects",
      "Unlimited Users",
      "Custom Analytics",
      "Dedicated Support",
      "SLA Guarantee",
      "Advanced Security",
      "API Access",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];
export default function page() {
  return (
  <><TabNavigationHeader/>
  <div className="py-24 mx-auto max-w-7xl px-4">
   <div className='text-center mb-12'>
    <h1 className="text-4xl font-bold tracking-tight mb-4">
      Simple, transparent pricing
    </h1>
    <p className='txt-xl text-muted-foreground'>
      Choose the perfect plan for your needs. Always know what you&apos;ll pay. 
    </p>
   </div>
   <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
   {tiers.map((tier) => (
    <Card key={tier.name} className={`flex flex-col ${tier.popular? 'border-primary shadow-lg': ''}`}>
      <CardHeader>
        {tier.popular && (
          <div className="text-sm font-medium text-primary mb-2">
            Most Popular
          </div>)}
          <CardTitle className="text-2xl">{tier.name}</CardTitle>
          <CardDescription>
            {tier.description}
          </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
            <div className="mb-4">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
          {tier.buttonText}
        </Button>
      </CardFooter>
    </Card>
      ))}
   </div>
  </div>
  </>
  )
}
