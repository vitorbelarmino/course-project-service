import prisma from '../../prisma/script';

class CategoryService {
  async getCategories() {
    const categories = await prisma.category.findMany();
    return categories;
  }
}

export const categoryService = new CategoryService();
