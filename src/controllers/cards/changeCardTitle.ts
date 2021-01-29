import { Request, Response } from 'express'
import Card from '../../models/card-model'

export const changeCardTitle = async (req: Request, res: Response) => {
  const title = req.body.title
  const cardId = req.params.cardId

  if(title === undefined) {
    res.status(400).json({message: 'No card title in the body'})
  } else {
    Card.findByIdAndUpdate(cardId, {title}, {new: true})
      .exec()
      .then(updatedCard => {
        res.status(200).json({item: updatedCard})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }


}