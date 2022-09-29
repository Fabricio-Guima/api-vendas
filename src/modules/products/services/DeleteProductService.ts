import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import { ProductRepository } from '../typeorm/repositories/ProducsRepository'

interface IRequest {
  id: string
}
class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository)

    const product = productsRepository.findOne(id)

    if (!product) throw new AppError('Product not found')

    await productsRepository.remove(product)
  }
}

export default DeleteProductService
