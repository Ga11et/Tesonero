import led from '../assets/questions/led.png'
import lightsoff from '../assets/questions/lightsoff.png'
import poweroff from '../assets/questions/poweroff.png'
import splitter from '../assets/questions/splitter.png'
import stability from '../assets/questions/stability.png'

export const questionsSlice = {
  state: {
    questions: [
      {
        id: '1',
        image: stability,
        heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
        description:
          'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
      },
      {
        id: '2',
        image: led,
        heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
        description:
          'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
      },
      {
        id: '3',
        image: lightsoff,
        heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
        description:
          'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
      },
      {
        id: '4',
        image: splitter,
        heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
        description:
          'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
      },
      {
        id: '5',
        image: poweroff,
        heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
        description:
          'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
      },
    ],
    activeQuestion: '0',
  },
  getters: {
    getQuestions(state) {
      return state.questions
    },
    getActiveQuestion(state) {
      return state.activeQuestion
    },
  },
  mutations: {
    setActiveQuestion(state, payload) {
      state.activeQuestion = payload
    },
  },
  actions: {},
  modules: {},
}
