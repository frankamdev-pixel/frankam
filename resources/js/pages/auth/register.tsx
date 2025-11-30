// import { login } from '@/routes';
// import { store } from '@/routes/register';
// import { Form, Head } from '@inertiajs/react';

// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Spinner } from '@/components/ui/spinner';
// import AuthLayout from '@/layouts/auth-layout';

// export default function Register() {
//     return (
//         <AuthLayout
//             title="Create an account"
//             description="Enter your details below to create your account"
//         >
//             <Head title="Register" />
//             <Form
//                 {...store.form()}
//                 resetOnSuccess={['password', 'password_confirmation']}
//                 disableWhileProcessing
//                 className="flex flex-col gap-6"
//             >
//                 {({ processing, errors }) => (
//                     <>
//                         <div className="grid gap-6">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="name">Name</Label>
//                                 <Input
//                                     id="name"
//                                     type="text"
//                                     required
//                                     autoFocus
//                                     tabIndex={1}
//                                     autoComplete="name"
//                                     name="name"
//                                     placeholder="Full name"
//                                 />
//                                 <InputError
//                                     message={errors.name}
//                                     className="mt-2"
//                                 />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Email address</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     required
//                                     tabIndex={2}
//                                     autoComplete="email"
//                                     name="email"
//                                     placeholder="email@example.com"
//                                 />
//                                 <InputError message={errors.email} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     required
//                                     tabIndex={3}
//                                     autoComplete="new-password"
//                                     name="password"
//                                     placeholder="Password"
//                                 />
//                                 <InputError message={errors.password} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <Label htmlFor="password_confirmation">
//                                     Confirm password
//                                 </Label>
//                                 <Input
//                                     id="password_confirmation"
//                                     type="password"
//                                     required
//                                     tabIndex={4}
//                                     autoComplete="new-password"
//                                     name="password_confirmation"
//                                     placeholder="Confirm password"
//                                 />
//                                 <InputError
//                                     message={errors.password_confirmation}
//                                 />
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="mt-2 w-full"
//                                 tabIndex={5}
//                                 data-test="register-user-button"
//                             >
//                                 {processing && <Spinner />}
//                                 Create account
//                             </Button>
//                         </div>

//                         <div className="text-center text-sm text-muted-foreground">
//                             Already have an account?{' '}
//                             <TextLink href={login()} tabIndex={6}>
//                                 Log in
//                             </TextLink>
//                         </div>
//                     </>
//                 )}
//             </Form>
//         </AuthLayout>
//     );
// }








// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Eye, EyeOff, Loader2, Upload, X } from 'lucide-react';
// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Form, Head, Link } from '@inertiajs/react';


// // Zod Schema (validation client)
// const registerSchema = z.object({
//   name: z.string().min(1, 'Nom requis'),
//   email: z.string().email('Email invalide').min(1, 'Email requis'),
//   password: z.string().min(6, '6 caractères minimum'),
//   password_confirmation: z.string().min(6, 'Confirmation requise'),
//   profile_photo: z.instanceof(File).optional().nullable(),
// }).refine((data) => data.password === data.password_confirmation, {
//   message: 'Les mots de passe ne correspondent pas',
//   path: ['password_confirmation'],
// });

// type RegisterFormData = z.infer<typeof registerSchema>;

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [preview, setPreview] = useState<string | null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     setValue,
//     watch,
//   } = useForm<RegisterFormData>({
//     resolver: zodResolver(registerSchema),
//   });

//   const profilePhoto = watch('profile_photo');

//   useEffect(() => {
//     if (profilePhoto instanceof File) {
//       const url = URL.createObjectURL(profilePhoto);
//       setPreview(url);
//       return () => URL.revokeObjectURL(url);
//     } else {
//       setPreview(null);
//     }
//   }, [profilePhoto]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] ?? null;
//     setValue('profile_photo', file);
//   };

//   const removePhoto = () => {
//     setValue('profile_photo', null);
//     const input = document.getElementById('profile_photo') as HTMLInputElement;
//     if (input) input.value = '';
//   };

//   return (
//       <>
//           <Head title="Inscription" />

//           <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E1126] via-[#020013] to-[#0E1126] p-6">
//               {/* Animated Orbs */}
//               <motion.div
//                   animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
//                   transition={{
//                       duration: 30,
//                       repeat: Infinity,
//                       ease: 'linear',
//                   }}
//                   className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
//               />
//               <motion.div
//                   animate={{ x: [200, -200, 200], y: [100, -100, 100] }}
//                   transition={{
//                       duration: 35,
//                       repeat: Infinity,
//                       ease: 'linear',
//                   }}
//                   className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-teal-600/10 blur-3xl"
//               />

//               <div className="grid w-full max-w-6xl gap-0 overflow-hidden rounded-3xl border border-white/5 shadow-2xl md:grid-cols-2">
//                   {/* LEFT: 3D Logo */}
//                   <motion.div
//                       initial={{ opacity: 0, x: -50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="relative flex hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0E1126]/80 to-[#020013]/90 p-16 backdrop-blur-xl md:block"
//                   >
//                       <div className="flex items-center gap-3">
//                           <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20" />
//                           <span className="text-2xl font-bold text-white">
//                               FrankamDev
//                           </span>
//                       </div>

//                       <div className="perspective-1000 relative h-80">
//                           <motion.div
//                               animate={{ rotateY: 360 }}
//                               transition={{
//                                   duration: 20,
//                                   repeat: Infinity,
//                                   ease: 'linear',
//                               }}
//                               className="absolute inset-0 flex items-center justify-center"
//                               style={{ transformStyle: 'preserve-3d' }}
//                           >
//                               <div
//                                   className="text-9xl font-black text-[#13152D]"
//                                   style={{
//                                       textShadow: `
//                       0 0 20px rgba(52,211,153,0.3),
//                       8px 8px 0 rgba(0,0,0,0.2),
//                       -8px -8px 0 rgba(255,255,255,0.1),
//                       0 20px 40px rgba(0,0,0,0.4)
//                     `,
//                                       filter: 'drop-shadow(0 0 30px rgba(52,211,153,0.4))',
//                                   }}
//                               >
//                                   FrankamDev
//                               </div>
//                           </motion.div>
//                       </div>

//                       <div>
//                           <p className="text-sm text-zinc-400 italic">
//                               “Simplicity is an acquired taste.”
//                           </p>
//                           <p className="mt-1 text-xs text-zinc-500">
//                               Katharine Gerould
//                           </p>
//                       </div>
//                   </motion.div>

//                   {/* RIGHT: Register Form */}
//                   <motion.div
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       className="flex flex-col justify-center border-l border-white/5 bg-[#020013]/95 p-10 backdrop-blur-2xl md:p-16"
//                   >
//                       {/* Mobile Logo */}
//                       <div className="mb-8 flex items-center gap-3 md:hidden">
//                           <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20" />
//                           <span className="text-xl font-bold text-white">
//                               FrankamDev
//                           </span>
//                       </div>

//                       <h2 className="mb-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
//                           <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-70 blur-sm" />
//                           Créez votre compte :
//                       </h2>

//                       {/* OAuth */}
//                       <div className="mb-8 flex gap-3">
//                           <motion.button
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               type="button"
//                               className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-emerald-500/50"
//                           >
//                               <svg className="h-5 w-5" viewBox="0 0 24 24">
//                                   <path
//                                       fill="#4285F4"
//                                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                                   />
//                                   <path
//                                       fill="#34A853"
//                                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                                   />
//                                   <path
//                                       fill="#FBBC05"
//                                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                                   />
//                                   <path
//                                       fill="#EA4335"
//                                       d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                                   />
//                               </svg>
//                               Google
//                           </motion.button>
//                           <motion.button
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               type="button"
//                               className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-emerald-500/50"
//                           >
//                               <svg
//                                   className="h-5 w-5"
//                                   fill="currentColor"
//                                   viewBox="0 0 24 24"
//                               >
//                                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                               </svg>
//                               GitHub
//                           </motion.button>
//                       </div>

//                       <div className="relative mb-8">
//                           <div className="absolute inset-0 flex items-center">
//                               <div className="w-full border-t border-white/10" />
//                           </div>
//                           <div className="relative flex justify-center text-xs">
//                               <span className="bg-[#020013] px-2 text-zinc-500">
//                                   OU INSCRIVEZ-VOUS AVEC EMAIL
//                               </span>
//                           </div>
//                       </div>

//                       {/* Inertia Form */}
//                       <Form
//                         //   {...RegisteredUserController.store.form()}
//                           resetOnSuccess={[
//                               'password',
//                               'password_confirmation',
//                               'profile_photo',
//                           ]}
//                           disableWhileProcessing
//                           encType="multipart/form-data"
//                           onSubmit={handleSubmit}
//                           className="space-y-5"
//                       >
//                           {({ processing, errors: serverErrors }) => (
//                               <>
//                                   {/* Name */}
//                                   <div>
//                                       <label className="mb-2 block text-sm font-medium text-zinc-300">
//                                           Nom complet
//                                       </label>
//                                       <motion.input
//                                           whileFocus={{ scale: 1.02 }}
//                                           {...register('name')}
//                                           type="text"
//                                           name="name"
//                                           required
//                                           autoFocus
//                                           className={`w-full border bg-white/5 px-4 py-3 ${
//                                               errors.name || serverErrors.name
//                                                   ? 'border-red-500/50'
//                                                   : 'border-white/10'
//                                           } rounded-xl text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none`}
//                                           placeholder="Frank Kamgang"
//                                       />
//                                       <AnimatePresence>
//                                           {(errors.name ||
//                                               serverErrors.name) && (
//                                               <motion.p
//                                                   initial={{
//                                                       opacity: 0,
//                                                       y: -10,
//                                                   }}
//                                                   animate={{ opacity: 1, y: 0 }}
//                                                   exit={{ opacity: 0, y: -10 }}
//                                                   className="mt-1 text-xs text-red-400"
//                                               >
//                                                   {errors.name?.message ||
//                                                       serverErrors.name}
//                                               </motion.p>
//                                           )}
//                                       </AnimatePresence>
//                                   </div>

//                                   {/* Email */}
//                                   <div>
//                                       <label className="mb-2 block text-sm font-medium text-zinc-300">
//                                           Email
//                                       </label>
//                                       <motion.input
//                                           whileFocus={{ scale: 1.02 }}
//                                           {...register('email')}
//                                           type="email"
//                                           name="email"
//                                           required
//                                           className={`w-full border bg-white/5 px-4 py-3 ${
//                                               errors.email || serverErrors.email
//                                                   ? 'border-red-500/50'
//                                                   : 'border-white/10'
//                                           } rounded-xl text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none`}
//                                           placeholder="frankamdev@email.com"
//                                       />
//                                       <AnimatePresence>
//                                           {(errors.email ||
//                                               serverErrors.email) && (
//                                               <motion.p
//                                                   initial={{
//                                                       opacity: 0,
//                                                       y: -10,
//                                                   }}
//                                                   animate={{ opacity: 1, y: 0 }}
//                                                   exit={{ opacity: 0, y: -10 }}
//                                                   className="mt-1 text-xs text-red-400"
//                                               >
//                                                   {errors.email?.message ||
//                                                       serverErrors.email}
//                                               </motion.p>
//                                           )}
//                                       </AnimatePresence>
//                                   </div>

//                                   {/* Password */}
//                                   <div>
//                                       <label className="mb-2 block text-sm font-medium text-zinc-300">
//                                           Mot de passe
//                                       </label>
//                                       <div className="relative">
//                                           <motion.input
//                                               whileFocus={{ scale: 1.02 }}
//                                               {...register('password')}
//                                               type={
//                                                   showPassword
//                                                       ? 'text'
//                                                       : 'password'
//                                               }
//                                               name="password"
//                                               required
//                                               className={`w-full border bg-white/5 px-4 py-3 ${
//                                                   errors.password ||
//                                                   serverErrors.password
//                                                       ? 'border-red-500/50'
//                                                       : 'border-white/10'
//                                               } rounded-xl pr-12 text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none`}
//                                               placeholder="••••••••"
//                                           />
//                                           <button
//                                               type="button"
//                                               onClick={() =>
//                                                   setShowPassword(!showPassword)
//                                               }
//                                               className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 transition hover:text-emerald-400"
//                                           >
//                                               {showPassword ? (
//                                                   <EyeOff size={20} />
//                                               ) : (
//                                                   <Eye size={20} />
//                                               )}
//                                           </button>
//                                       </div>
//                                       <AnimatePresence>
//                                           {(errors.password ||
//                                               serverErrors.password) && (
//                                               <motion.p
//                                                   initial={{
//                                                       opacity: 0,
//                                                       y: -10,
//                                                   }}
//                                                   animate={{ opacity: 1, y: 0 }}
//                                                   exit={{ opacity: 0, y: -10 }}
//                                                   className="mt-1 text-xs text-red-400"
//                                               >
//                                                   {errors.password?.message ||
//                                                       serverErrors.password}
//                                               </motion.p>
//                                           )}
//                                       </AnimatePresence>
//                                   </div>

//                                   {/* Confirm Password */}
//                                   <div>
//                                       <label className="mb-2 block text-sm font-medium text-zinc-300">
//                                           Confirmer le mot de passe
//                                       </label>
//                                       <div className="relative">
//                                           <motion.input
//                                               whileFocus={{ scale: 1.02 }}
//                                               {...register(
//                                                   'password_confirmation',
//                                               )}
//                                               type={
//                                                   showConfirmPassword
//                                                       ? 'text'
//                                                       : 'password'
//                                               }
//                                               name="password_confirmation"
//                                               required
//                                               className={`w-full border bg-white/5 px-4 py-3 ${
//                                                   errors.password_confirmation ||
//                                                   serverErrors.password_confirmation
//                                                       ? 'border-red-500/50'
//                                                       : 'border-white/10'
//                                               } rounded-xl pr-12 text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none`}
//                                               placeholder="••••••••"
//                                           />
//                                           <button
//                                               type="button"
//                                               onClick={() =>
//                                                   setShowConfirmPassword(
//                                                       !showConfirmPassword,
//                                                   )
//                                               }
//                                               className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 transition hover:text-emerald-400"
//                                           >
//                                               {showConfirmPassword ? (
//                                                   <EyeOff size={20} />
//                                               ) : (
//                                                   <Eye size={20} />
//                                               )}
//                                           </button>
//                                       </div>
//                                       <AnimatePresence>
//                                           {(errors.password_confirmation ||
//                                               serverErrors.password_confirmation) && (
//                                               <motion.p
//                                                   initial={{
//                                                       opacity: 0,
//                                                       y: -10,
//                                                   }}
//                                                   animate={{ opacity: 1, y: 0 }}
//                                                   exit={{ opacity: 0, y: -10 }}
//                                                   className="mt-1 text-xs text-red-400"
//                                               >
//                                                   {errors.password_confirmation
//                                                       ?.message ||
//                                                       serverErrors.password_confirmation}
//                                               </motion.p>
//                                           )}
//                                       </AnimatePresence>
//                                   </div>

//                                   {/* Profile Photo */}
//                                   <div>
//                                       <label className="mb-2 block text-sm font-medium text-zinc-300">
//                                           Photo de profil (optionnel)
//                                       </label>
//                                       <div className="relative">
//                                           <input
//                                               id="profile_photo"
//                                               type="file"
//                                               accept="image/*"
//                                               name="profile_photo"
//                                               onChange={handleFileChange}
//                                               className="hidden"
//                                           />
//                                           <motion.label
//                                               htmlFor="profile_photo"
//                                               whileHover={{ scale: 1.02 }}
//                                               className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:border-emerald-500/50"
//                                           >
//                                               <Upload size={18} />
//                                               Choisir une photo
//                                           </motion.label>
//                                       </div>
//                                       <AnimatePresence>
//                                           {(errors.profile_photo ||
//                                               serverErrors.profile_photo) && (
//                                               <motion.p
//                                                   initial={{
//                                                       opacity: 0,
//                                                       y: -10,
//                                                   }}
//                                                   animate={{ opacity: 1, y: 0 }}
//                                                   exit={{ opacity: 0, y: -10 }}
//                                                   className="mt-1 text-xs text-red-400"
//                                               >
//                                                   {errors.profile_photo
//                                                       ?.message ||
//                                                       serverErrors.profile_photo}
//                                               </motion.p>
//                                           )}
//                                       </AnimatePresence>
//                                   </div>

//                                   {/* Photo Preview */}
//                                   {preview && (
//                                       <motion.div
//                                           initial={{ opacity: 0, scale: 0.9 }}
//                                           animate={{ opacity: 1, scale: 1 }}
//                                           className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3"
//                                       >
//                                           <img
//                                               src={preview}
//                                               alt="Aperçu"
//                                               className="h-20 w-20 rounded-full border-2 border-emerald-500/50 object-cover"
//                                           />
//                                           <div className="flex gap-2">
//                                               <motion.button
//                                                   whileHover={{ scale: 1.05 }}
//                                                   whileTap={{ scale: 0.95 }}
//                                                   type="button"
//                                                   onClick={removePhoto}
//                                                   className="flex items-center gap-1 rounded-lg bg-red-500/20 px-3 py-1 text-xs text-red-400 transition hover:bg-red-500/30"
//                                               >
//                                                   <X size={14} />
//                                                   Supprimer
//                                               </motion.button>
//                                               <motion.button
//                                                   whileHover={{ scale: 1.05 }}
//                                                   whileTap={{ scale: 0.95 }}
//                                                   type="button"
//                                                   onClick={() =>
//                                                       document
//                                                           .getElementById(
//                                                               'profile_photo',
//                                                           )
//                                                           ?.click()
//                                                   }
//                                                   className="rounded-lg bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400 transition hover:bg-emerald-500/30"
//                                               >
//                                                   Changer
//                                               </motion.button>
//                                           </div>
//                                       </motion.div>
//                                   )}

//                                   {/* Submit */}
//                                   <motion.button
//                                       whileHover={{ scale: 1.02 }}
//                                       whileTap={{ scale: 0.98 }}
//                                       type="submit"
//                                       disabled={processing || isSubmitting}
//                                       className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#020013] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
//                                   >
//                                       <span className="flex items-center gap-2">
//                                           {processing ? (
//                                               <>
//                                                   <Loader2
//                                                       className="animate-spin"
//                                                       size={22}
//                                                   />
//                                                   Création...
//                                               </>
//                                           ) : (
//                                               'Créer le compte'
//                                           )}
//                                       </span>
//                                   </motion.button>
//                               </>
//                           )}
//                       </Form>

//                       <div className="mt-8 text-center text-xs text-zinc-500">
//                           Déjà un compte ?{' '}
//                           <Link
//                               href="/login"
//                               className="font-medium text-emerald-400 hover:text-emerald-300"
//                           >
//                               Connectez-vous
//                           </Link>
//                       </div>

//                       <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
//                           En vous inscrivant, vous acceptez nos{' '}
//                           <a
//                               href="#"
//                               className="text-emerald-400 hover:text-emerald-300"
//                           >
//                               Conditions d'utilisation
//                           </a>
//                       </div>

//                       <div className="mt-8 text-center text-xs text-zinc-600">
//                           © 2024 - 2025 FrankamDev.com. Tous droits réservés.
//                       </div>
//                   </motion.div>
//               </div>
//           </div>
//       </>
//   );
// }












// resources/js/Pages/Auth/Register.tsx

import { Head, Link, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Upload, X } from 'lucide-react';
import { FormEvent, useState, useEffect } from 'react';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    const { data, setData, post, processing, errors, reset, setError, clearErrors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        profile_photo: null as File | null,
    });

    // Gérer l'aperçu de la photo
    useEffect(() => {
        if (data.profile_photo) {
            const url = URL.createObjectURL(data.profile_photo);
            setPreview(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setPreview(null);
        }
    }, [data.profile_photo]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData('profile_photo', file);
    };

    const removePhoto = () => {
        setData('profile_photo', null);
        const input = document.getElementById('profile_photo') as HTMLInputElement;
        if (input) input.value = '';
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        clearErrors();

        // Validation rapide côté client (optionnel, mais propre)
        if (data.password !== data.password_confirmation) {
            setError('password_confirmation', 'Les mots de passe ne correspondent pas');
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('password_confirmation', data.password_confirmation);
        if (data.profile_photo) {
            formData.append('profile_photo', data.profile_photo);
        }

        post('/register', {
            data: formData,
            forceFormData: true,
            onFinish: () => {
                reset('password', 'password_confirmation');
                setData('profile_photo', null);
            },
        });
    };

    return (
        <>
            <Head title="Inscription - FrankamDev" />

            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E1126] via-[#020013] to-[#0E1126] p-6">

                {/* Orbes animés */}
                <motion.div
                    animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
                />
                <motion.div
                    animate={{ x: [200, -200, 200], y: [100, -100, 100] }}
                    transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                    className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-teal-600/10 blur-3xl"
                />

                <div className="grid w-full max-w-6xl gap-0 overflow-hidden rounded-3xl border border-white/5 shadow-2xl md:grid-cols-2">

                    {/* GAUCHE – Logo 3D */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0E1126]/80 to-[#020013]/90 p-16 backdrop-blur-xl md:flex"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20" />
                            <span className="text-2xl font-bold text-white">FrankamDev</span>
                        </div>

                        <div className="perspective-1000 relative h-80">
                            <motion.div
                                animate={{ rotateY: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div
                                    className="text-5xl font-black text-emerald-400"
                                    style={{
                                        textShadow: `
                                            0 0 20px rgba(52,211,153,0.3),
                                            8px 8px 0 rgba(0,0,0,0.2),
                                            -8px -8px 0 rgba(255,255,255,0.1),
                                            0 20px 40px rgba(0,0,0,0.4)
                                        `,
                                        filter: 'drop-shadow(0 0 30px rgba(52,211,153,0.4))',
                                    }}
                                >
                                    FrankamDev
                                </div>
                            </motion.div>
                        </div>

                        <div>
                            <p className="text-sm text-zinc-400 italic">
                                “Simplicity is an acquired taste.”
                            </p>
                            <p className="mt-1 text-xs text-zinc-500">Katharine Gerould</p>
                        </div>
                    </motion.div>

                    {/* DROITE – Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center border-l border-white/5 bg-[#020013]/95 p-10 backdrop-blur-2xl md:p-16"
                    >
                        <div className="mb-8 flex items-center gap-3 md:hidden">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20" />
                            <span className="text-5xl font-bold text-white">FrankamDev</span>
                        </div>

                        <h2 className="mb-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-70 blur-sm" />
                            Créez votre compte :
                        </h2>

                        {/* OAuth */}
                        <div className="mb-8 grid grid-cols-2 gap-3">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button"
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm hover:border-emerald-500/50 transition">
                                     <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"                                    />
                                  <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                     />
                                </svg>
                                Google
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button"
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm hover:border-emerald-500/50 transition">
                                    <svg
                                     className="h-5 w-5"
                                     fill="currentColor"
                                     viewBox="0 0 24 24"
                                 >
                                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </motion.button>
                        </div>

                        <div className="relative mb-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-[#020013] px-2 text-zinc-500">OU INSCRIVEZ-VOUS AVEC EMAIL</span>
                            </div>
                        </div>

                        <form onSubmit={submit} className="space-y-6">

                            {/* Nom */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-zinc-300">Nom complet</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    required
                                    autoFocus
                                    className={`w-full border bg-white/5 px-4 py-3 rounded-xl text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                                    placeholder="Frank Kamgang"
                                />
                                <AnimatePresence>
                                    {errors.name && (
                                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-zinc-300">Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    required
                                    className={`w-full border bg-white/5 px-4 py-3 rounded-xl text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                                    placeholder="frankamdev@gmail.com"
                                />
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mot de passe */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-zinc-300">Mot de passe</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        required
                                        className={`w-full border bg-white/5 px-4 py-3 pr-12 rounded-xl text-white backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none ${errors.password ? 'border-red-500/50' : 'border-white/10'}`}
                                        placeholder="6 caractères minimum"
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 hover:text-emerald-400">
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {errors.password && (
                                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                                            {errors.password}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Confirmation */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-zinc-300">Confirmer le mot de passe</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={data.password_confirmation}
                                        onChange={e => setData('password_confirmation', e.target.value)}
                                        required
                                        className={`w-full border bg-white/5 px-4 py-3 pr-12 rounded-xl text-white backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none ${errors.password_confirmation ? 'border-red-500/50' : 'border-white/10'}`}
                                    />
                                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 hover:text-emerald-400">
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {errors.password_confirmation && (
                                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                                            {errors.password_confirmation}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Photo de profil */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-zinc-300">Photo de profil (optionnel)</label>
                                <input id="profile_photo" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                <motion.label
                                    htmlFor="profile_photo"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:border-emerald-500/50"
                                >
                                    <Upload size={18} />
                                    Choisir une photo
                                </motion.label>
                            </div>

                            {/* Aperçu photo */}
                            {preview && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3">
                                    <img src={preview} alt="Aperçu" className="h-20 w-20 rounded-full border-2 border-emerald-500/50 object-cover" />
                                    <button type="button" onClick={removePhoto}
                                        className="flex items-center gap-1 rounded-lg bg-red-500/20 px-3 py-1 text-xs text-red-400 hover:bg-red-500/30 transition">
                                        <X size={14} /> Supprimer
                                    </button>
                                </motion.div>
                            )}

                            {/* Bouton */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={processing}
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/30 disabled:opacity-50"
                            >
                                {processing ? 'Création en cours...' : 'Créer le compte'}
                            </motion.button>
                        </form>

                        <div className="mt-8 text-center text-xs text-zinc-500">
                            Déjà un compte ?{' '}
                            <Link href="/login" className="font-medium text-emerald-400 hover:text-emerald-300">
                                Connectez-vous
                            </Link>
                        </div>

                        <div className="mt-8 text-center text-xs text-zinc-600">
                            © 2024 - 2025 FrankamDev.com. Tous droits réservés.
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}