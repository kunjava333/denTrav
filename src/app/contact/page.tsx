import ContactForm from '@/components/pages/contact/ContactForm'
import FAQSection from '@/components/pages/contact/Faqs'
import SocialMediaCards from '@/components/pages/contact/SocialMediaCard'
import React from 'react'

export default function page() {
  return (
    <>
     <ContactForm />
      <FAQSection />
      <SocialMediaCards />
    </>
  )
}
