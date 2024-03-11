import boxSvg from "../assets/box.svg"

import HeroSlider from "../components/HeroSlider";


const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-info">

        <div className="logo">
          <div className="box-icon">
            <img src={boxSvg} alt="box-icon" />
          </div>
          dpd
        </div>

        <h1>Добро пожаловать в DPD</h1>

        <button className='cta'>Смотреть вакансий</button>

      </div>
      <HeroSlider />
    </section>
  )
}

export default Hero