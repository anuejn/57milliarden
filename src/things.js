import teacher from '../assets/things-icons/teacher.svg'
import nurse from '../assets/things-icons/nurse.svg'
import pen from '../assets/things-icons/pen.svg'
import culture from '../assets/things-icons/culture.svg'
import transport from '../assets/things-icons/transport.svg'
import food from '../assets/things-icons/food.svg'
import work from '../assets/things-icons/work.svg'
import pension from '../assets/things-icons/pension.svg'
import school from '../assets/things-icons/school.svg'
import tank from '../assets/things-icons/tank.svg'


export const goodThings = [
  {
    text: 'Lehrerinnen',
    icon: teacher,
    cost: 50798.64,
    comparisions: [
      {divisor: 16, text: 'neue Lehrer pro Bundesland'},
      {divisor: 16, text: 'neue Lehrer pro Schule in Deutschland'},
      {divisor: 16, text: 'neue Lehrer pro Klasse'},
    ]
  },
  {
    text: 'Krankenpfleger',
    icon: nurse,
    cost: 34164,
    comparisions: [
      {divisor: 16, text: 'neue Pfleger pro Krankenhaus'},
      {divisor: 16, text: 'neue Pfleger pro 100 Patienten'},
      {divisor: 16, text: 'wie gebraucht werden um eine würdige Patientenbehandlung sicherzustellen.'},
    ]
  },
  /*{
    text: 'Kita-Plätze',
    icon: pen,
    cost: 2000,
    comparisions: [
      {divisor: 16, text: ''},
      {divisor: 16, text: 'Wie gebraucht werden'},
    ]
  },*/
  {
    text: 'Jugendzentren Bauen',
    icon: culture,
    cost: 2745000,
    comparisions: [
      {divisor: 16, text: 'Pro Schule'},
      {divisor: 16, text: 'Wie gebraucht werden'},
    ]
  },
  {
    text: 'Schulen Bauen',
    icon: school,
    cost: 23200000,
    comparisions: [
      {divisor: 16, text: 'Pro Schule'},
      {divisor: 16, text: 'Wie gebraucht werden'},
    ]
  },
  /*{
    text: 'kostenlose Essen für Schulkinder',
    icon: food,
    cost: 3.95,
    comparisions: [
      {divisor: 16, text: 'Pro Schule'},
      {divisor: 16, text: 'Wie gebraucht werden'},
    ]
  },*/
  {
    text: 'kostenlose ÖPNV Jahrestickets',
    icon: transport,
    cost: 840,
    comparisions: [
      {divisor: 16, text: 'Pro Schule'},
      {divisor: 16, text: 'Wie gebraucht werden'},
    ]
  },
  /*{
    text: 'Aufstockung des Hartz IV Regelsatzes um',
    after: 1/600,
    icon: work,
    comparisions: [
      {divisor: 16, text: 'Pro Schule'},
      {divisor: 16, text: 'Wie gebraucht werden'},
    ]
  },
  {
    text: 'Anhebung des Durchschnittlichen rentenniveaus um',
    after: 1/100,
    icon: pension,
    comparisions: [
      {divisor: 16, text: 'Pro Schule'},
      {divisor: 16, text: 'Wie gebraucht werden'},
    ]
  }*/
]

export const badThing = { icon: tank };