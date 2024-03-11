import React from 'react'
import Points from '../components/Points'

const Values = () => {
  return (
    <section className='values'>
      <div className="values-text">
        <h2 className='red'>Корпоративные ценности</h2>
        <div className="values-description">
          <p>
            – это характер и суть нашей компании. Это принципы, которых должны придерживаться во взаимоотношениях друг с другом все сотрудники, независимо от занимаемой должности и ее уровня. Корпоративные ценности являются неотъемлемой частью корпоративной культуры.
          </p>
          <p>
            Мы стремимся быть такой компанией по доставке грузов, которой по праву гордятся сотрудники и доверяют клиенты.
          </p>
        </div>
      </div>
      <Points />

    </section>
  )
}

export default Values