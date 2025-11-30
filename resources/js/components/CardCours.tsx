
'use client';

import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Layers, Search, Zap } from 'lucide-react';
interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    level: string;
    thumbnail?: string;
}
export default function CardCourse({ course }: { course: Course }) {
 ;

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl backdrop-blur-xl"
        >
            {/* Image Background avec overlay */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {/* Image SEO + main */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="relative"
                    >
                        {/* Main */}
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-8 -left-16 h-32 w-32 rounded-full bg-gradient-to-br from-amber-600/20 to-transparent blur-xl"
                        />
                        <div className="relative z-20 h-40 w-40">
                            <svg
                                viewBox="0 0 160 160"
                                className="h-full w-full drop-shadow-2xl"
                            >
                                <defs>
                                    <linearGradient
                                        id="seo-s"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#ef4444" />
                                        <stop
                                            offset="100%"
                                            stopColor="#dc2626"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="seo-e"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#f97316" />
                                        <stop
                                            offset="100%"
                                            stopColor="#ea580c"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="seo-o"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop
                                            offset="100%"
                                            stopColor="#2563eb"
                                        />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur
                                            stdDeviation="8"
                                            result="blur"
                                        />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* S */}
                                <motion.path
                                    d="M 40 60 Q 30 60 30 70 Q 30 80 40 80 L 55 80 Q 65 80 65 90 Q 65 100 55 100 L 40 100"
                                    fill="none"
                                    stroke="url(#seo-s)"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    filter="url(#glow)"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                />
                                {/* E */}
                                <motion.g
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <path
                                        d="M 70 60 L 70 100 M 70 80 L 90 80"
                                        fill="none"
                                        stroke="url(#seo-e)"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        filter="url(#glow)"
                                    />
                                    <path
                                        d="M 70 60 L 90 60 M 70 100 L 90 100"
                                        fill="none"
                                        stroke="url(#seo-e)"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        filter="url(#glow)"
                                    />
                                </motion.g>
                                {/* O */}
                                <motion.circle
                                    cx="115"
                                    cy="80"
                                    r="15"
                                    fill="none"
                                    stroke="url.('#seo-o')"
                                    strokeWidth="12"
                                    filter="url(#glow)"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.1,
                                        type: 'spring',
                                        stiffness: 200,
                                    }}
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Éléments flottants */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-8 left-12 z-30"
                >
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                        <Search className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs font-medium text-white">
          recherche
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-8 right-12 z-30"
                >
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                        <Zap className="h-4 w-4 text-yellow-400" />
                        <span className="text-xs font-medium text-white">
                            Optimisation
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Contenu */}
            <div className="space-y-5 p-6">
                {/* Logo HTML5 */}
                {course.thumbnail && (
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-48 w-full object-cover"
                    />
                )}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 0.6,
                        type: 'spring',
                        stiffness: 200,
                    }}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                        <svg
                            className="h-8 w-8 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2L2 7L3.5 18L12 22L20.5 18L22 7L12 2Z" />
                            <path
                                d="M12 2V22M12 2L2 7V17L12 22M12 2L22 7V17L12 22"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">
          {course.title}
                        </h3>
                        <p className="text-xs font-medium text-emerald-400">
          {course.level}
                        </p>
                    </div>
                </motion.div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-300">
        {course.description}
                </p>

                {/* Métadonnées */}
                <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1.5 text-slate-400"
                        >
                            <BookOpen className="h-4 w-4 text-emerald-400" />
                            <span className="font-medium text-white">
                                8 chapitres
                            </span>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1.5 text-slate-400"
                        >
                            <Clock className="h-4 w-4 text-yellow-400" />
                            <span className="font-medium text-white">6h</span>
                        </motion.div>
                    </div>

                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-full border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-2"
                    >
                        <Layers className="h-4 w-4 text-emerald-400" />
                    </motion.div>
                </div>
            </div>

            {/* Bordure animée au hover */}
            <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-[length:400%_400%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{ zIndex: -1 }}
            />
        </motion.div>
    );
}

