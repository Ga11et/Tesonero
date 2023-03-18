import BerriesIMG from '../assets/menu/berries.png'
import LeftBubblesIMG from '../assets/menu/leftBubbles.png'
import RightBubblesIMG from '../assets/menu/rightBubbles.png'

export const menuSlice = {
  state: {
    items: [
      {
        id: '1',
        type: 'headphones',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      { id: '2', type: 'box', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
      { id: '3', type: 'board', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
      { id: '4', type: 'pult', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
      {
        id: '5',
        type: 'headphones',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      { id: '6', type: 'box', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    ],
    berries: BerriesIMG,
    leftBubbles: LeftBubblesIMG,
    rightBubbles: RightBubblesIMG,
  },
  getters: {
    getMenuItems(state) {
      return state.items
    },
    getBerriesIMG(state) {
      return state.berries
    },
    getLeftBubblesIMG(state) {
      return state.leftBubbles
    },
    getRightBubblesIMG(state) {
      return state.rightBubbles
    },
  },
  mutations: {},
  actions: {},
  modules: {},
}
