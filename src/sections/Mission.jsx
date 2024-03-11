import missonPng from "../assets/mission.png"
import group2 from "../assets/group2.svg"

import MissionSlider from '../components/MissionSlider'

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-card">

        <div className="mission-img">
          <img src={missonPng} alt="mission-image" />
        </div>

        <div className="wrapper">
          <div className="mission-text">
            <img src={group2} alt="bg" className='mission-bg' />
            <h2 className='title'>Миссия</h2>
            <p>С высокопрофессиональными сотрудниками и развитой корпоративной культурой мы должны стать первым помощником клиентов в сфере логистики и доставки грузов и посылок по всей территории Казахстана и за его пределами, предлагая широкий выбор надежных и эффективных решений.</p>
          </div>
        </div>
        
      </div>

      <MissionSlider />

    </section>
  )
}

export default Mission