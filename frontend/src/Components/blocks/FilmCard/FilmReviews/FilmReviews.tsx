import { DivReviewsCol, DivReviewsContainer } from './styles'
import { Review } from '../../../../types/types'
import FilmReview from '../../../UI/FilmReview/FilmReview'

type FilmReviewsProps = {
  reviews: Review[]
}

const FilmReviews: React.FC<FilmReviewsProps> = ({ reviews }) => {
  const firstColEnd: number = Math.ceil(reviews.length / 2) // определяем количество отзывов в первом столбце

  // функция для отрисовки отзывов, с учётом количества, которое нужно отрисовать
  const getReviews = (start: number, end: number): JSX.Element[] => {
    const content: JSX.Element[] = []
    for (let i = start; i < end; i++) {
      content.push(<FilmReview key={reviews[i].id} review={reviews[i]} />)
    }
    return content
  }

  return (
    <DivReviewsContainer>
      <DivReviewsCol>{getReviews(0, firstColEnd)}</DivReviewsCol>

      <DivReviewsCol>{getReviews(firstColEnd, reviews.length)}</DivReviewsCol>
    </DivReviewsContainer>
  )
}

export default FilmReviews
