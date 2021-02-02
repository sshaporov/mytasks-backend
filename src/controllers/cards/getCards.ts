import {Response} from 'express'
import Card from '../../models/card-model'
import {IUserRequest} from '../../middleware/authMiddleware'

export const getCards = async (req: IUserRequest, res: Response) => {
  const userId = req.user.id
  const searchCardTitle = req.query.search

  Card.find({user_id: userId})
    .exec()
    .then(cards => {
      if(searchCardTitle == undefined || searchCardTitle == '') {
        res.status(200).json(cards)
      } else {
        const cardsSearch = cards.filter(card => card.title ===  searchCardTitle)
        res.status(200).json(cardsSearch)
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
}