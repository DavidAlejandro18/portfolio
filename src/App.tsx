import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import profileImage from './assets/profile.png';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Server,
  Database,
  Cloud,
  Menu,
  X,
  MapPin,
  Calendar,
  GraduationCap,
  Wrench
} from 'lucide-react';

function App() {
  const base_url = import.meta.env.BASE_URL;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    {
      category: 'Lenguajes',
      technologies: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Node.js', 'Express.js'],
      icon: Code,
      color: 'blue'
    },
    {
      category: 'Frameworks / Librerías',
      technologies: ['React', 'Bootstrap', 'Leaflet', 'Jest'],
      icon: Server,
      color: 'green'
    },
    {
      category: 'Bases de Datos',
      technologies: ['MySQL', 'MongoDB', 'Firebase'],
      icon: Database,
      color: 'yellow'
    },
    {
      category: 'Herramientas',
      technologies: ['Git', 'GitHub', 'Postman', 'Visual Studio Code', 'FileZilla'],
      icon: Cloud,
      color: 'purple'
    },
    {
      category: 'Otros',
      technologies: ['REST APIs', 'POO', 'Geoserver', 'QGIS', 'Stripe', 'PayPal SDK', 'Google OAuth'],
      icon: Wrench,
      color: 'orange'
    }
  ];

  const experience = [
    {
      title: 'Desarrollador Full-stack',
      company: 'Proaxis',
      period: 'Enero 2020 - Actualidad',
      location: 'Modalidad híbrida',
      description: 'Desarrollo de aplicaciones web, bases de datos relacionales y no relacionales, APIs REST y herramientas geoespaciales. Experiencia en el desarrollo de sistemas urbanos, tiendas en línea y sistemas de gestión de acceso.',
      // technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Firebase', 'APIs REST']
      technologies: ['PHP', 'MySQL', 'APIs REST', 'QGIS', 'GeoServer']
    },
  ];

  const projects = {
    business: [
      {
        title: 'Visor Guadalupe',
        type: 'Aplicación Web',
        description: 'Mapa interactivo con información georreferenciada del municipio de Guadalupe, N.L.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'Leaflet'],
        link: 'https://visorurbano.guadalupe.gob.mx/',
        imageURL: `${base_url}img/visorguadalupe.png`
      },
      {
        title: 'Visor Proaxis',
        type: 'Aplicación Web',
        description: 'Visor gratuito con mapas y datos analíticos sobre desarrollo urbano e inmobiliario en Monterrey, N.L.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'Leaflet'],
        link: 'https://visorproaxis.com/',
        imageURL: `${base_url}img/visorproaxis.png`
      },
      {
        title: 'Tienda Proaxis',
        type: 'Tienda en Línea',
        description: 'Tienda en línea con plantillas profesionales en Excel para desarrolladores inmobiliarios como proformas paramétricas, mapas socioeconómicos y análisis financieros.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'Paypal SDK'],
        link: 'https://tienda.proaxis.com.mx/',
        imageURL: `${base_url}img/tiendaproaxis.png`
      },
    ],
    personal: [
      {
        title: 'VLSM Calc',
        type: 'Proyecto Personal',
        description: 'Calculadora de subredes con técnica VLSM. Backend en Node.js con TypeScript, handlebars, Bootstrap y Jest.',
        technologies: ['TypeScript', 'Node.js', 'Bootstrap', 'Jest'],
        link: 'https://vlsm-calc.onrender.com/',
        github: 'https://github.com/DavidAlejandro18/vlsm-calc',
        imageURL: `${base_url}img/vlsmcalc2.png`
      },
      {
        title: 'Access Code',
        type: 'Aplicación',
        description: 'App para control de accesos residenciales con códigos QR. Desarrollada en React Native. Expo Firebase, TypeScript.',
        technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
        github: 'https://github.com/DavidAlejandro18/access-code',
        imageURL: `${base_url}img/accesscode.png`
      },
      {
        title: 'Leaflet AnimatedSearchBox',
        type: 'Plugin',
        description: 'Plugin de autocompletado en mapas Leaflet. Usando HTML, CSS y JS.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Leaflet'],
        github: 'https://github.com/DavidAlejandro18/Leaflet.AnimatedSearchBox',
        imageURL: `${base_url}img/searchbox.png`
      },
    ]
  };

  const education = [
    {
      degree: 'Ingeniería en Software',
      institution: 'Universidad del Valle de México (UVM)',
      period: '2022 - 2025',
      description: 'Enfoque en desarrollo de software, arquitectura de sistemas y bases de datos.',
      courses: ['Arquitectura de Software', 'Bases de Datos', 'Desarrollo Web', 'Programación Orientada a Objetos']
    },
    {
      degree: 'Técnico en Programación Web',
      institution: 'Escuela Industrial y Preparatoria Técnica Álvaro Obregón - UANL',
      period: '2016 - 2019',
      description: 'Fundamentos de programación y desarrollo web.',
      courses: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  const certifications = [
    'IT Essentials - Cisco Networking Academy (2022)',
    'CCNA: Introduction to Networks - Cisco (2024)',
    'Fundamentos de la gestión de proyectos - Coursera (2025)',
    'Python 101 for Data Science - Coursera (2024)',
    'Node: De cero a experto - Udemy (2021)',
    'Git + GitHub - Udemy (2021)',
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{ fontFamily: 'Google Sans, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-400">Portafolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">Acerca de</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Habilidades</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-blue-400 transition-colors">Experiencia</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Proyectos</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-blue-400 transition-colors">Educación</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contacto</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-400 transition-colors">Acerca de</button>
                <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-400 transition-colors">Habilidades</button>
                <button onClick={() => scrollToSection('experience')} className="text-left hover:text-blue-400 transition-colors">Experiencia</button>
                <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-400 transition-colors">Proyectos</button>
                <button onClick={() => scrollToSection('education')} className="text-left hover:text-blue-400 transition-colors">Educación</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-400 transition-colors">Contacto</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-white">David Alejandro</span>
                <span className="text-blue-400"> Tovar de la Rosa</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-2">
                Desarrollador Full-stack
              </p>
              <div className="text-lg text-gray-400 mb-8 flex flex-col sm:flex-row items-center justify-center gap-2">
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  García, N.L., MX
                </div>
                <span className="hidden sm:inline">|</span>
                <span>Disponible para trabajo remoto</span>
              </div>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Desarrollador full-stack con sólidos conocimientos en desarrollo web, bases de datos relacionales y no relacionales, APIs REST y herramientas geoespaciales. Experiencia en el desarrollo de sistemas urbanos, tiendas en línea y sistemas de gestión de acceso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Contáctame
                </button>
                <a
                  href={`${base_url}cv.pdf`}
                  download
                  className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Acerca de Mí</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Soy un desarrollador full-stack apasionado con experiencia en la construcción de aplicaciones
                web escalables y de alto rendimiento. Mi experiencia se centra en el diseño e implementación
                de arquitecturas robustas del lado del servidor, APIs RESTful y sistemas de bases de datos.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Me destaco en entornos donde puedo contribuir a decisiones arquitectónicas,
                resolver desafíos técnicos complejos y desarrollar soluciones innovadoras. Mi enfoque combina
                principios de código limpio con soluciones pragmáticas que entregan valor real al negocio.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Actualmente busco oportunidades para unirme a equipos innovadores donde pueda aprovechar
                mi experiencia en desarrollo para construir la próxima generación de productos y servicios digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                Icon={skill.icon}
                category={skill.category}
                technologies={skill.technologies}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experiencia Profesional</h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 bg-gray-600 h-full"></div>
                <div className="bg-gray-800 rounded-lg p-6 ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
                      <p className="text-gray-300 font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proyectos Empresariales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.business.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                type={project.type}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                imageURL={project.imageURL}
              ></ProjectCard>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mt-16 mb-12">Proyectos Personales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.personal.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                type={project.type}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                github={project.github}
                imageURL={project.imageURL}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Formación Académica</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600/20 p-3 rounded-lg">
                    <GraduationCap className="text-green-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-4">{edu.period}</p>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span key={course} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications Section */}
            <div className="max-w-4xl mx-auto mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Certificaciones y Cursos</h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contacto</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              Siempre estoy interesado en escuchar sobre nuevas oportunidades y proyectos emocionantes.
              ¡Conectemos y discutamos cómo podemos trabajar juntos!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:alextovar146@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Enviar Email
              </a>
              <a
                href="https://www.linkedin.com/in/davidatovar/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/DavidAlejandro18"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            David Alejandro Tovar de la Rosa © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;