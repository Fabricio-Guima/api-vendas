import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import Product from '../typeorm/entities/Product'
import ProductRepository from '../typeorm/repositories/ProductsRepository'

interface IRequest {
  id: string
}
class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository)

    //nao tem repository prq to usando o find que ja vem do typorm
    const product = productsRepository.findOne(id)

    if (!product) throw new AppError('Product not found')

    return product
  }
}

export default ShowProductService
