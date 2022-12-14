import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import Product from '../typeorm/entities/Product'
import ProductRepository from '../typeorm/repositories/ProductsRepository'

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository)

    //nao tem repository prq to usando o find que ja vem do typorm
    const products = productsRepository.find()

    return products
  }
}

export default ListProductService
