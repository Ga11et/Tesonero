import LargeReviewImage from '../assets/reviews/largeReviewPhoto.png'
import MediumReviewImage from '../assets/reviews/mediumReviewPhoto.png'
import SmallReviewImage from '../assets/reviews/smallReviewPhoto.png'

export const reviewsSlice = {
  state: {
    largeReview: {
      id: '1',
      author: 'Jane Doe',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi expedita, provident excepturi officia! Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?',
      photos: {
        large: LargeReviewImage,
        medium: MediumReviewImage,
        small: SmallReviewImage,
      },
    },
    reviews: [
      {
        id: '2',
        author: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore at ipsum quas eius nemo nam numquam eos in quos!',
        photos: {
          large: LargeReviewImage,
          medium: MediumReviewImage,
          small: SmallReviewImage,
        },
      },
      {
        id: '3',
        author: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore at ipsum quas eius nemo nam numquam eos in quos!',
        photos: {
          large: LargeReviewImage,
          medium: MediumReviewImage,
          small: SmallReviewImage,
        },
      },
    ],
  },
  getters: {
    getLargeReview(state) {
      return state.largeReview
    },
    getReviews(state) {
      return state.reviews
    },
  },
  mutations: {},
  actions: {},
  modules: {},
}
