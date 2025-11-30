

// import Footer from '@/components/Footer';
// import Navbar from '@/components/NavBar';
// import { usePage } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import {
//     FaCss3Alt,
//     FaDatabase,
//     FaHtml5,
//     FaJsSquare,
//     FaPhp,
//     FaReact,
// } from 'react-icons/fa';
// import { HiOutlineExclamation } from 'react-icons/hi';
// import { SiTailwindcss } from 'react-icons/si';
// import CardCourse from '../../components/CardCours';
// import Member from '../../components/Member';

// const technologies = [
//     { icon: <FaHtml5 size={30} />, color: 'bg-orange-600' },
//     { icon: <FaCss3Alt size={30} />, color: 'bg-blue-500' },
//     { icon: <FaJsSquare size={30} />, color: 'bg-yellow-400' },
//     { icon: <FaPhp size={30} />, color: 'bg-indigo-600' },
//     { icon: <FaReact size={30} />, color: 'bg-cyan-400' },
//     { icon: <SiTailwindcss size={30} />, color: 'bg-sky-500' },
//     { icon: <FaDatabase size={30} />, color: 'bg-blue-800' },
// ];

// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//     },
// };
// const cardVariants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: { duration: 0.6, ease: 'easeOut' },
//     },
// };

// export default function FormationsIndex() {
//     const { categories } = usePage().props;
//     const [activeCategory, setActiveCategory] = useState(null);
//     // console.log(categories);

//     // Les cours de la catégorie sélectionnée
//     const displayedCourses = activeCategory?.courses || [];

//     return (
//         <>
//             <Navbar />

//             {/* Hero Section */}
//             <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0B0E1E] to-[#11152B] px-6 text-center text-white">
//                 <motion.h1
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="max-w-3xl text-3xl leading-tight font-extrabold md:text-5xl"
//                 >
//                     Des formations qui vous font passer <br />
//                     de <span className="text-yellow-400">
//                         l'apprentissage
//                     </span>{' '}
//                     à <span className="text-green-400">l'action</span>
//                 </motion.h1>

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                     className="mt-4 max-w-xl text-gray-300"
//                 >
//                     Apprenez les compétences. Créez votre portfolio. Trouvez un
//                     emploi.
//                 </motion.p>

//                 <div className="mt-10 flex flex-wrap justify-center gap-5">
//                     {technologies.map((tech, index) => (
//                         <motion.div
//                             key={index}
//                             className={`flex h-16 w-16 items-center justify-center rounded-xl shadow-lg md:h-20 md:w-20 ${tech.color}`}
//                             whileHover={{ scale: 1.15, rotate: 5 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             {tech.icon}
//                         </motion.div>
//                     ))}
//                 </div>

//                 <div className="mt-6 flex max-w-lg items-start gap-3 text-sm text-gray-400 md:text-base">
//                     <HiOutlineExclamation className="mt-1 text-yellow-400" />
//                     <span className="font-semibold">
//                         Pas besoin de filtrer. Chaque cours vous emmène du
//                         niveau débutant à avancé, étape par étape.
//                     </span>
//                 </div>
//             </section>

//             {/* Categories Section */}
//             <section className="bg-[#0B0E1E] p-6 md:p-16">
//                 <h2 className="mb-12 text-center text-2xl font-extrabold text-white md:text-4xl">
//                     Découvrez nos catégories
//                 </h2>

//                 {/* Boutons catégories */}
//                 <div className="mb-10 flex flex-wrap justify-center gap-4">
                    
//                 </div>

//                 {/* Affichage des cours par catégorie */}
//                 {activeCategory && (
//                     <>
//                         <h3 className="mb-8 text-center text-xl font-bold text-white">
//                             Cours dans {activeCategory.name}
//                         </h3>

//                         <motion.div
//                             variants={containerVariants}
//                             initial="hidden"
//                             animate="visible"
//                             className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//                         >
//                             {displayedCourses.map((course) => (
//                                 <motion.div
//                                     key={course.id}
//                                     variants={cardVariants}
//                                 >
//                                     <CardCourse course={course} />
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </>
//                 )}

//                 <div className="mt-16">
//                     <Member />
//                 </div>
//             </section>

//             <Footer />
//         </>
//     );
// }

// resources/js/Pages/Formations/Index.tsx

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import CardCourse from '@/components/CardCours';
import Member from '@/components/Member';
import { usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { HiOutlineExclamation } from 'react-icons/hi';

interface Course { id: number; title: string; description: string; thumbnail: string | null; price: number; level: string; }
interface Category { id: number; name: string; slug: string; courses?: Course[]; }

const techs = [
  { icon: <FaHtml5 className="text-white" size={36} />, bg: 'bg-orange-600' },
  { icon: <FaCss3Alt className="text-white" size={36} />, bg: 'bg-blue-600' },
  { icon: <FaJsSquare className="text-black" size={36} />, bg: 'bg-yellow-400' },
  { icon: <FaPhp className="text-white" size={36} />, bg: 'bg-indigo-700' },
  { icon: <FaReact className="text-white" size={36} />, bg: 'bg-cyan-500' },
  { icon: <SiTailwindcss className="text-white" size={36} />, bg: 'bg-teal-500' },
  { icon: <FaDatabase className="text-white" size={36} />, bg: 'bg-purple-700' },
];

export default function FormationsIndex() {
  const { categories = [] } = usePage<{ categories: Category[] }>().props;
  const [active, setActive] = useState<Category | 'all'>('all');

  const courses = active === 'all'
    ? categories.flatMap(c => c.courses || [])
    : active?.courses || [];

  const title = active === 'all' ? 'Tous les cours' : active.name;

  return (
    <>
      <Navbar />

      {/* HERO – PARFAITEMENT CENTRÉ & COMPACT */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0e1a] via-[#0d1122] to-[#0f1429] overflow-hidden">
        {/* Orbes animés (discrets) */}
        <motion.div
          animate={{ x: [-250, 250, -250], y: [-150, 150, -150] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [250, -250, 250], y: [150, -150, 150] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Formez-vous.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Construisez.
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Réussissez.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-xl text-gray-300"
          >
            Des formations complètes, du débutant au pro – avec projets réels.
          </motion.p>

          {/* Icônes tech – compactes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {techs.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`${t.bg} p-5 rounded-2xl shadow-xl`}
              >
                {t.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Alerte compacte */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10 mx-auto max-w-2xl bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <HiOutlineExclamation className="text-yellow-400" size={28} />
              <p className="text-gray-200 font-medium">
                Chaque formation va du <strong>débutant</strong> au <strong>niveau pro</strong> – étape par étape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATÉGORIES & COURS */}
      <section className="bg-[#0a0e1a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-black text-emerald-400 mb-16"
          >
            Explorez nos formations
          </motion.h2>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActive('all')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                active === 'all'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/50'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Tous les cours
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  active?.id === cat.id
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Titre dynamique */}
          <AnimatePresence mode="wait">
            <motion.h3
              key={active === 'all' ? 'all' : active?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center text-3xl font-bold text-white mb-12"
            >
              {title}
            </motion.h3>
          </AnimatePresence>

          {/* Grille */}
          {courses.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {courses.map(course => (
                <motion.div
                  key={course.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <CardCourse course={course} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-500 py-20 text-xl">
              Aucun cours disponible pour le moment.
            </p>
          )}

          <div className="mt-32">
            <Member />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}