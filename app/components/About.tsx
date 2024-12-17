'use client';

import { motion } from 'framer-motion';
import { User, GraduationCap, Cat } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">자기소개</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  중부대학교 정보보호학과 92313439 오시은 입니다. 모의해킹과
                  개발분야에 관심이 있지만 현재 확실한 진로를 정하지 못하여
                  여러가지 공부를 하고 있습니다.
                </li>
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">자격증, 미래계획</h3>
              </div>

              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                <li>네트워크 관리사 2급</li>
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  앞으로 특강도 들으며 여러 전공 관련 자격증을 딸 것이고, 종강
                  후 웹서버 예제와 같은 여러가지 코딩 분야도 시도해 볼 것입니다.
                </li>
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Cat className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">그 외</h3>
              </div>
              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                <li>MBTI : ESTP</li>
                <li>C언어를 더 깊게 배워보고 싶습니다</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
