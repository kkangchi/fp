'use client';

import { motion } from 'framer-motion';
import { Github, Youtube, ExternalLink, Coffee } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'kkangchi',
    icon: Github,
    description: '개인 깃허브 페이지 입니다',
    repoUrl: 'https://github.com/kkangchi',
    techStack: ['Next.js', 'React', 'mongoDB'],
    features: [
      'clerk-api',
      'mongo-crud',
      'crud-action',
      'dob',
      '개인 전 포트폴리오 웹페이지',
      '쇼핑몰 웹 예제',
    ],
  },
  {
    id: 2,
    title: '개인 블로그 사이트',
    icon: Coffee,
    repoUrl: 'https://m.blog.naver.com/PostList.naver?blogId=1102lulu',
    description:
      '학교, 개인 공부 내용을 기록할 것입니다. 비공개글로 작성하여 본인 외에, 글을 확인할 수 없지만 추후에 공개로 바꿀 생각입니다',
    techStack: ['c언어', '파이썬', 'html', '보안 관련', '자바'],
    features: ['티스토리?', '보안', '네트워크', '자격증 공부', '외국어'],
  },

  {
    id: 3,
    title: 'Vercel',
    icon: ExternalLink,
    description: '버셀 페이지 입니다',
    repoUrl: 'https://vercel.com/kkangchis-projects',
    techStack: ['http://localhost:3000'],
    features: [
      'clerk-api',
      'mongo-crud',
      'crud-action',
      'dob',
      '개인 전 포트폴리오 웹페이지',
      '쇼핑몰 웹 예제',
    ],
  },
  {
    id: 4,
    title: '자기소개 영상',
    icon: Youtube,
    description: '자기소개 영상 입니다',
    repoUrl: 'https://youtu.be/pK4EGq7BdQY',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          프로젝트 바로가기
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="bg-card relative group hover:shadow-2xl hover:shadow-black/[0.1] dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-background w-[380px] h-auto rounded-xl p-6">
                  <div className="text-xl font-bold text-neutral-600 dark:text-white w-full">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      {project.features?.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full mt-4 space-y-4">
                    <div className="text-xs text-muted-foreground flex flex-wrap gap-2 justify-center">
                      {project.techStack?.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-muted px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl block w-full bg-black dark:bg-white dark:text-black text-white text-sm px-4 py-2 text-center hover:opacity-90 transition-opacity"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
