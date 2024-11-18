import React from 'react'
// import Top from './top/top'
import Bottom from './diseases_second_page/diseases_second_page'
const Diseases = () => {
  const scrollToTop = () =>
  {
    window.scrollTo(0,0)
  }
  scrollToTop();
  return (
    <>
    {/* <Top/> */}
    <Bottom/>
     </>
  )
}

export default Diseases