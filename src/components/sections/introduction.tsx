import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Linkedin, Github } from 'lucide-react';
import type { IntroductionData } from '@/types/portfolio';

const introductionData: IntroductionData = {
  fullName: 'Janvi Singh',
  role: 'Software Developer',
  education: {
    degree: 'BE. in Computer Science',
    university: 'Chandigarh University',
    graduationYear: '2022-2026',
  },
  bio: "I'm a Full-Stack Developer skilled in the MERN stack, passionate about creating sleek and responsive web applications. I'm currently pursuing a BTech in Computer Science at Chandigarh University and have built projects like an AI-powered notes app and a ticket booking system. I also hold certifications in React.js, JavaScript, IoT, and Cloud Computing. Let's connect!",
  profileImageUrl: '/Profile_Picture.jpg', // Path to the image in the public folder
  linkedinUrl: 'https://www.linkedin.com/in/janvi-singh1708/',
  githubUrl: 'https://github.com/JanviSingh1712',
};

export default function IntroductionSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
          <CardContent className="p-6 md:p-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              {introductionData.profileImageUrl && (
                <Image
                  src={introductionData.profileImageUrl}
                  alt={introductionData.fullName}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary shadow-lg object-cover"
                  data-ai-hint="profile outdoor"
                  priority
                />
              )}
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                {introductionData.fullName}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mt-2 mb-4">
                {introductionData.role}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
                <GraduationCap className="h-5 w-5" />
                <span>
                  {introductionData.education.degree}, {introductionData.education.university} ({introductionData.education.graduationYear})
                </span>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-6">
                {introductionData.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                {introductionData.linkedinUrl && (
                  <Button asChild variant="outline" className="group transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Link href={introductionData.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </Link>
                  </Button>
                )}
                {introductionData.githubUrl && (
                  <Button asChild variant="outline" className="group transition-colors hover:bg-foreground hover:text-background">
                    <Link href={introductionData.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" /> GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
