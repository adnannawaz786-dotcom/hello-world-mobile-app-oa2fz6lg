import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Github, Globe, Heart, Smartphone, Zap, Code2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const features = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile First",
    description: "Designed with mobile users in mind"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Fast & Responsive",
    description: "Lightning-fast performance across all devices"
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Modern Tech Stack",
    description: "Built with Next.js, Tailwind CSS & Framer Motion"
  }
];

const technologies = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "shadcn/ui",
  "Lucide Icons"
];

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 p-4 pb-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center py-8">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="h-10 w-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Our App
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern, mobile-friendly Hello World application showcasing the power of React and modern web technologies.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div variants={itemVariants}>
          <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Our Mission
              </CardTitle>
              <CardDescription>
                Creating beautiful, accessible, and performant web applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This Hello World application demonstrates modern web development practices, 
                combining the power of React with the elegance of Tailwind CSS and the 
                fluidity of Framer Motion animations. Built with a mobile-first approach, 
                it ensures a seamless experience across all devices.
              </p>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Key Features
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-blue-500">{feature.icon}</div>
                        <h4 className="font-medium">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-green-500" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 border-0"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Components", value: "10+" },
              { label: "Pages", value: "3" },
              { label: "Animations", value: "20+" },
              { label: "Mobile Ready", value: "100%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants}>
          <Card className="backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-0">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore our app and see modern web development in action.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
              >
                <Github className="h-4 w-4" />
                Go Back Home
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
