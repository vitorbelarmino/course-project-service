import { TypeLesson } from '@prisma/client';
import prisma from './script';
import { thumbnails } from './thumbnails';

async function main() {
  // limpa o banco de dados para evitar duplicação
  await prisma.lesson.deleteMany();
  await prisma.course.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.category.deleteMany();

  const categories = [
    { name: 'Programação' },
    { name: 'Design' },
    { name: 'Marketing' },
    { name: 'Finanças' },
    { name: 'Inglês' },
  ];

  const teachers = [
    { name: 'João Silva' },
    { name: 'Maria Oliveira' },
    { name: 'José Santos' },
    { name: 'Ana Souza' },
    { name: 'Rodrigo Pereira' },
  ];

  await prisma.category.createMany({
    data: categories,
  })

  const getCategories = await prisma.category.findMany();

  await prisma.teacher.createMany({
    data: teachers,
  });

  const getTeachers = await prisma.teacher.findMany();

  const courses = [
    {
      name: 'Desenvolvimento Web com Node.js',
      description: 'Aprenda a construir aplicativos web usando Node.js',
      thumbnail: thumbnails[0].url,
      teacherId: getTeachers[0].id,
      categoryId: getCategories[0].id,
    },
    {
      name: 'Design de Interfaces Responsivas',
      description: 'Domine o design de interfaces adaptáveis a diferentes dispositivos',
      thumbnail: thumbnails[1].url,
      teacherId: getTeachers[1].id,
      categoryId: getCategories[1].id,
    },
    {
      name: 'Marketing Digital',
      description: 'Aprenda a criar campanhas de marketing digital',
      thumbnail: thumbnails[2].url,
      teacherId: getTeachers[2].id,
      categoryId: getCategories[2].id,
    },
    {
      name: 'Finanças Pessoais',
      description: 'Domine suas finanças pessoais',
      thumbnail: thumbnails[3].url,
      teacherId: getTeachers[3].id,
      categoryId: getCategories[3].id,
    },
    {
      name: 'Inglês para iniciantes',
      description: 'Aprenda o inglês básico para conversação',
      thumbnail:  thumbnails[4].url,
      teacherId: getTeachers[4].id,
      categoryId: getCategories[4].id,
    },
  ];

  await prisma.course.createMany({
    data: courses,
    skipDuplicates: true,
  });

  const getCourse = await prisma.course.findMany();
  
  const lessonsCourse = [
    {
      name: 'Configuração do Ambiente Node.js',
      type: TypeLesson.video,
      content: 'Configure o ambiente de desenvolvimento Node.js em seu sistema',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[0].id,
    },
    {
      name: 'Conceitos Básicos do JavaScript',
      type: TypeLesson.text,
      content: 'Entenda os conceitos fundamentais do JavaScript para o desenvolvimento web',
      courseId: getCourse[0].id,
    },
    {
      name: 'Express.js e Roteamento',
      type: TypeLesson.video,
      content: 'Aprenda a usar o framework Express.js e a realizar roteamento em aplicações Node.js',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[0].id,
    },
    {
      name: 'Persistência de Dados com MongoDB',
      type: TypeLesson.video,
      content: 'Explore como realizar persistência de dados usando o MongoDB em aplicações Node.js',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[0].id,
    },
    {
      name: 'Autenticação e Autorização',
      type: TypeLesson.text,
      content: 'Implemente autenticação e autorização em suas aplicações Node.js',
      courseId: getCourse[0].id,
    },
    {
      name: 'Desenvolvimento de APIs RESTful',
      type: TypeLesson.video,
      content: 'Aprenda a construir APIs RESTful usando Node.js e Express.js',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[0].id,
    },
    {
      name: 'Princípios do Design Responsivo',
      type: TypeLesson.video,
      content: 'Entenda os princípios fundamentais do design responsivo',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[1].id,
    },
    {
      name: 'Grids e Layouts Flexíveis',
      type: TypeLesson.text,
      content: 'Aprenda a criar grids e layouts flexíveis para interfaces responsivas',
      courseId: getCourse[1].id,
    },
    {
      name: 'Media Queries e Breakpoints',
      type: TypeLesson.video,
      content: 'Explore o uso de media queries e breakpoints no design responsivo',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[1].id,
    },
    {
      name: 'Imagens e Multimídia Responsiva',
      type: TypeLesson.video,
      content: 'Saiba como tornar imagens e multimídia responsivos em seus projetos',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[1].id,
    },
    {
      name: 'Navegação Responsiva',
      type: TypeLesson.text,
      content: 'Implemente navegação responsiva para melhorar a experiência do usuário em dispositivos diversos',
      courseId: getCourse[1].id,
    },
    {
      name: 'Teste e Otimização',
      type: TypeLesson.video,
      content: 'Aprenda a testar e otimizar suas interfaces responsivas para diferentes dispositivos',
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
      courseId: getCourse[1].id,
    },
    {
      name: 'Introdução ao Marketing Digital',
      content: 'Conceitos básicos e fundamentos do marketing digital.',
      type: TypeLesson.video,
      courseId: getCourse[2].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Estratégias de SEO',
      content: 'Otimização de mecanismos de busca para aumentar a visibilidade online.',
      type: TypeLesson.text,
      courseId: getCourse[2].id,
    },
    {
      name: 'Publicidade Online',
      content: 'Como criar e gerenciar campanhas de publicidade eficazes na internet.',
      type: TypeLesson.video,
      courseId: getCourse[2].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Marketing de Conteúdo',
      content: 'Criação e distribuição de conteúdo relevante para atrair o público-alvo.',
      type: TypeLesson.text,
      courseId: getCourse[2].id,
    },
    {
      name: 'Estratégias em Redes Sociais',
      content: 'Utilização de plataformas de redes sociais para promover negócios.',
      type: TypeLesson.video,
      courseId: getCourse[2].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Análise de Métricas',
      content: 'Como medir e analisar o desempenho das campanhas de marketing digital.',
      type: TypeLesson.text,
      courseId: getCourse[2].id,
    },
    {
      name: 'Orçamento Pessoal',
      content: 'Como criar um orçamento eficiente para controlar seus gastos.',
      type: TypeLesson.video,
      courseId: getCourse[3].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Investimentos Básicos',
      content: 'Introdução aos principais tipos de investimentos para iniciantes.',
      type: TypeLesson.text,
      courseId: getCourse[3].id,
    },
    {
      name: 'Redução de Dívidas',
      content: 'Estratégias para reduzir e eliminar dívidas de maneira eficaz.',
      type: TypeLesson.video,
      courseId: getCourse[3].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Planejamento de Aposentadoria',
      content: 'Como planejar e garantir um futuro financeiramente estável.',
      type: TypeLesson.text,
      courseId: getCourse[3].id,
    },
    {
      name: 'Educação Financeira para Crianças',
      content: 'Dicas para ensinar crianças sobre finanças desde cedo.',
      type: TypeLesson.video,
      courseId: getCourse[3].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Estratégias de Economia',
      content: 'Práticas e hábitos para economizar dinheiro no dia a dia.',
      type: TypeLesson.text,
      courseId: getCourse[3].id,
    },
    {
      name: 'Introdução ao Alfabeto Inglês',
      content: 'Conheça as letras do alfabeto e suas pronúncias básicas.',
      type: TypeLesson.video,
      courseId: getCourse[4].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Expressões Comuns em Inglês',
      content: 'Aprenda expressões essenciais para se comunicar em situações cotidianas.',
      type: TypeLesson.text,
      courseId: getCourse[4].id,
    },
    {
      name: 'Conversação Simples em Inglês',
      content: 'Inicie sua prática de conversação com frases simples e úteis.',
      type: TypeLesson.video,
      courseId: getCourse[4].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Vocabulário Básico',
      content: 'Amplie seu vocabulário com palavras e frases úteis em inglês.',
      type: TypeLesson.text,
      courseId: getCourse[4].id,
    },
    {
      name: 'Gramática Básica',
      content: 'Compreenda as regras gramaticais fundamentais do inglês.',
      type: TypeLesson.video,
      courseId: getCourse[4].id,
      urlVideo: 'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy',
    },
    {
      name: 'Prática de Conversação Guiada',
      content: 'Exercícios práticos para melhorar suas habilidades de conversação.',
      type: TypeLesson.text,
      courseId: getCourse[4].id,
    },
  ]

  await prisma.lesson.createMany({
    data: lessonsCourse,
    skipDuplicates: true,
  });

}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
