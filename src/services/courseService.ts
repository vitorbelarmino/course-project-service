import prisma from '../../prisma/script';

class CourseService {
  public async getCourses() {
    const courses = await prisma.course.findMany({
      include: {
        teacher: true,
        category: true,
        lessons: true
      }
    });
    return courses;
  }
}

export const courseService = new CourseService();
