import React from 'react'
import TagLine from './TagLine.jsx'
import RegisterForm from './RegisterForm.jsx'

function HomeSection() {
  return (
    <div className="flex justify-between pt-20 px-40 mb-40">
      <TagLine/>
      <RegisterForm/>
    </div>
  )
}

export default HomeSection
