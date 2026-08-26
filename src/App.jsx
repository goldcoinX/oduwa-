 <!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GUUD MUZIK | Official Record Label Site</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Google Fonts: Oswald for punchy headlines & Inter for clean text -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            red: '#e50914',
                            darkRed: '#b20710',
                            gold: '#ffd700',
                            goldMetallic: '#d4af37',
                            darkGold: '#aa7c11',
                            gray: '#555555',
                            lightGray: '#8c8c8c',
                            darkBg: '#050505'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        impact: ['Oswald', 'sans-serif']
                    }
                }
            }
        }
    </script>

    <style>
        body {
            background-color: #000000;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }

        .logo-3d {
            font-family: 'Oswald', sans-serif;
            letter-spacing: -1px;
            background: linear-gradient(180deg, #fff3a1 0%, #ffd700 45%, #b8860b 80%, #fff7cc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0px 4px 12px rgba(255, 215, 0, 0.35);
            position: relative;
        }

        .gold-gradient-btn {
            background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #aa7c11 100%);
            color: #000000;
            transition: all 0.3s ease;
        }

        .gold-gradient-btn:hover {
            background: linear-gradient(135deg, #ffe066 0%, #ffd700 50%, #d4af37 100%);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
            color: #000000;
        }

        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #000;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #d4af37;
        }

        .play-btn-pulse:hover {
            transform: scale(1.15);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
        }

        .album-card {
            transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease;
        }
        .album-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
        }
    </style>
</head>
<body class="antialiased selection:bg-amber-400 selection:text-black">

    <!-- TOP NAVIGATION BAR -->
    <header class="absolute top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 transition-all duration-300">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#home" class="flex flex-col items-start group">
                <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/v1784816468/Guud_MUZIK_odglxt.png" 
                     alt="Guud Muzik Official Logo" 
                     class="h-16 md:h-24 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] transition-transform duration-300 group-hover:scale-105">
            </a>

            <nav class="hidden md:flex items-center space-x-10 text-base md:text-lg font-black tracking-widest text-white">
                <a href="#home" class="hover:text-amber-400 transition-colors uppercase">HOME</a>
                <a href="#artists" class="hover:text-amber-400 transition-colors uppercase">ARTISTS</a>
                <a href="#music" class="hover:text-amber-400 transition-colors uppercase">MUSIC</a>
                <a href="#tour" class="hover:text-amber-400 transition-colors uppercase">TOUR</a>
                <a href="#history" class="hover:text-amber-400 transition-colors uppercase">HISTORY</a>
            </nav>

            <button id="mobileMenuBtn" class="md:hidden text-amber-400 text-2xl p-2 focus:outline-none" aria-label="Toggle menu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>

        <div id="mobileMenu" class="hidden md:hidden bg-black/95 border-b border-amber-500/30 px-6 py-4 flex flex-col space-y-4 text-center font-bold text-lg tracking-widest mt-3">
            <a href="#home" class="mobile-link hover:text-amber-400 py-1">HOME</a>
            <a href="#artists" class="mobile-link hover:text-amber-400 py-1">ARTISTS</a>
            <a href="#music" class="mobile-link hover:text-amber-400 py-1">MUSIC</a>
            <a href="#tour" class="mobile-link hover:text-amber-400 py-1">TOUR</a>
            <a href="#history" class="mobile-link hover:text-amber-400 py-1">HISTORY</a>
        </div>
    </header>

    <!-- HERO SECTION WITH TIGHT FACE CROP SLIDER -->
    <section id="home" class="relative min-h-screen flex flex-col justify-end bg-black overflow-hidden pb-12 pt-32 px-6 md:px-16">
        <div class="absolute inset-0 z-0 overflow-hidden">
            <div id="heroSliderTrack" class="flex w-[300%] h-full transition-transform duration-700 ease-in-out">
                <!-- Slide 1: Home Page Cover -->
                <div class="w-1/3 h-full relative flex-shrink-0 overflow-hidden">
                    <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/c_fill,g_face,w_1920,h_1080/v1784818890/Home_Page_cd5yfd.jpg" 
                         alt="Oduwa - Home Page" 
                         class="w-full h-full object-cover object-[center_20%] scale-[3.2] md:scale-[3.8] filter grayscale contrast-125 opacity-60">
                </div>
                <!-- Slide 2: Join Page Cover -->
                <div class="w-1/3 h-full relative flex-shrink-0 overflow-hidden">
                    <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/c_fill,g_face,w_1920,h_1080/v1784818894/JOIN_Page_bsnwah.jpg" 
                         alt="Oduwa - Join Page" 
                         class="w-full h-full object-cover object-[center_20%] scale-[3.2] md:scale-[3.8] filter grayscale contrast-125 opacity-60">
                </div>
                <!-- Slide 3: Gallery Page Cover -->
                <div class="w-1/3 h-full relative flex-shrink-0 overflow-hidden">
                    <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/c_fill,g_face,w_1920,h_1080/v1784818885/GALLERY_Page_w9aynh.jpg" 
                         alt="Oduwa - Gallery Page" 
                         class="w-full h-full object-cover object-[center_20%] scale-[3.2] md:scale-[3.8] filter grayscale contrast-125 opacity-60">
                </div>
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none"></div>
        </div>

        <div class="absolute top-28 right-6 md:right-16 z-20 flex items-center gap-3 bg-black/60 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <button onclick="prevHeroSlide()" class="text-amber-400 hover:text-white p-1 focus:outline-none transition-colors" aria-label="Previous Artist Image">
                <i class="fa-solid fa-chevron-left text-xs md:text-sm"></i>
            </button>
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#ffd700]"></span>
                <span id="currentArtistBadge" class="text-[10px] md:text-xs font-black tracking-widest uppercase text-amber-300">
                    ODUWA (1/3)
                </span>
            </div>
            <button onclick="nextHeroSlide()" class="text-amber-400 hover:text-white p-1 focus:outline-none transition-colors" aria-label="Next Artist Image">
                <i class="fa-solid fa-chevron-right text-xs md:text-sm"></i>
            </button>
        </div>

        <div class="relative z-10 max-w-6xl w-full mx-auto">
            <form id="newsletterForm" onsubmit="handleNewsletterSubmit(event)" class="space-y-4">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                    <div class="lg:col-span-4 text-left"></div>

                    <div class="lg:col-span-8">
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                            <div class="md:col-span-5 flex flex-col text-left">
                                <label class="text-[11px] font-bold text-amber-400/90 tracking-widest mb-1.5 uppercase">* EMAIL</label>
                                <input type="email" id="newsletterEmail" required 
                                       placeholder="EMAIL ADDRESS (REQUIRED)" 
                                       class="bg-black/70 border border-amber-500/40 focus:border-amber-400 text-white px-3 py-2.5 text-xs md:text-sm font-bold tracking-wider uppercase focus:outline-none w-full placeholder:text-zinc-500 focus:shadow-[0_0_12px_rgba(255,215,0,0.3)] transition-all">
                            </div>

                            <div class="md:col-span-4 flex flex-col text-left relative">
                                <label class="text-[11px] font-bold text-amber-400/90 tracking-widest mb-1.5 uppercase">* CHOOSE COUNTRY</label>
                                <input type="text" id="newsletterCountry" list="countryList" required 
                                       placeholder="SEARCH..." autocomplete="off"
                                       class="bg-black/70 border border-amber-500/40 focus:border-amber-400 text-white px-3 py-2.5 text-xs md:text-sm font-bold tracking-wider uppercase focus:outline-none w-full placeholder:text-zinc-500 focus:shadow-[0_0_12px_rgba(255,215,0,0.3)] transition-all">
                                <datalist id="countryList"></datalist>
                            </div>

                            <div class="md:col-span-3 flex flex-col justify-end">
                                <button type="submit" 
                                        class="gold-gradient-btn font-black py-2.5 px-6 text-sm uppercase tracking-widest transition-all w-full h-[42px] mt-1 md:mt-0 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] cursor-pointer">
                                    SUBMIT
                                </button>
                            </div>
                        </div>

                        <div class="text-left space-y-0.5 pt-2">
                            <p id="emailError" class="text-red-500 font-bold text-[10px] md:text-[11px] tracking-widest hidden uppercase">A VALID EMAIL IS REQUIRED.</p>
                            <p class="text-amber-400/80 font-bold text-[10px] md:text-[11px] tracking-widest uppercase">* REQUIRED FIELDS</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center space-x-2 pt-6">
                    <input type="checkbox" id="subscribeConsent" checked required class="w-4 h-4 bg-transparent border border-amber-400 accent-amber-400 rounded-none cursor-pointer">
                    <label for="subscribeConsent" class="text-xs md:text-sm font-black tracking-wider text-white uppercase cursor-pointer drop-shadow">
                        SUBSCRIBE ME TO THE <span class="text-amber-400 font-black">GUUD MUZIK RECORDS</span> NEWSLETTER
                    </label>
                </div>

                <div class="text-center pt-2">
                    <p class="text-[10px] md:text-[11px] font-bold text-zinc-300 tracking-widest uppercase space-x-2 drop-shadow">
                        <a href="#privacyModal" onclick="openModal('Privacy Policy', 'Your privacy is important to Guud Muzik Records. We do not sell your personal data.')" class="underline hover:text-amber-400 text-amber-400/90 transition-colors">PRIVACY POLICY</a>
                        <span class="text-amber-400/50">|</span>
                        <a href="#termsModal" onclick="openModal('Terms & Conditions', 'By subscribing, you agree to receive official releases and updates from Guud Muzik Records.')" class="underline hover:text-amber-400 text-amber-400/90 transition-colors">TERMS & CONDITIONS</a>
                    </p>
                </div>
            </form>

            <div id="newsletterSuccess" class="hidden mt-4 p-3 bg-black/90 border border-amber-400 text-amber-300 font-bold text-sm tracking-wider uppercase text-center shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                ✓ THANK YOU! YOU ARE NOW SUBSCRIBED TO GUUD MUZIK EXCLUSIVES.
            </div>
        </div>
    </section>

    <!-- ARTIST & LABEL TEAM SECTION -->
    <section id="artists" class="py-20 px-4 md:px-12 bg-black border-t border-amber-500/20">
        <div class="max-w-7xl mx-auto">
            
            <h2 class="text-4xl md:text-7xl font-black text-center tracking-tight text-white mb-12 uppercase font-impact flex items-center justify-center gap-4">
                <span class="h-1 w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-400"></span>
                ARTIST
                <span class="h-1 w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-400"></span>
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div class="lg:col-span-6 relative group overflow-hidden bg-zinc-950 border border-amber-500/30 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                    <div class="aspect-[4/5] w-full relative">
                        <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/v1784818890/Home_Page_cd5yfd.jpg" 
                             alt="ODUWA" 
                             class="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                        
                        <div class="absolute bottom-6 left-6 right-6">
                            <h3 class="text-3xl md:text-5xl font-black text-red-600 tracking-tight leading-none uppercase drop-shadow-md">
                                ODUWA
                            </h3>
                            <p class="text-amber-400 font-bold text-xs md:text-sm tracking-widest mt-1 uppercase flex items-center gap-2">
                                <i class="fa-solid fa-crown text-amber-400 text-xs"></i> FLAGSHIP ARTIST / SINGER-SONGWRITER
                            </p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5 flex flex-col space-y-6">
                    <div class="flex flex-col">
                        <div class="relative aspect-video bg-zinc-900 overflow-hidden border border-amber-500/30 group cursor-pointer" onclick="openVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ', 'MY BOO (OFFICIAL MUSIC VIDEO)')">
                            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" 
                                 alt="My Boo Music Video" 
                                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-black flex items-center justify-center pl-1 shadow-2xl play-btn-pulse">
                                    <i class="fa-solid fa-play text-xl"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="text-red-600 font-black text-sm md:text-base tracking-wider uppercase mt-2 flex items-center justify-between">
                            <span>MY BOO (OFFICIAL MUSIC VIDEO)</span>
                            <span class="text-xs text-amber-400 font-bold">4K EXCLUSIVE</span>
                        </h4>
                    </div>

                    <div class="flex flex-col">
                        <div class="relative aspect-video bg-zinc-900 overflow-hidden border border-amber-500/30 group cursor-pointer" onclick="openVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ', 'GUUD MUZIK ANTHEM (LIVE IN STUDIO)')">
                            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop" 
                                 alt="Studio Session" 
                                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <div class="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-black flex items-center justify-center pl-1 shadow-2xl play-btn-pulse">
                                    <i class="fa-solid fa-play text-xl"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="text-red-600 font-black text-sm md:text-base tracking-wider uppercase mt-2 flex items-center justify-between">
                            <span>GUUD MUZIK ANTHEM (LIVE IN STUDIO)</span>
                            <span class="text-xs text-amber-400 font-bold">BEHIND THE SCENES</span>
                        </h4>
                    </div>
                </div>

                <div class="lg:col-span-1 flex lg:flex-col justify-center items-center gap-6 lg:gap-8 py-4 text-white text-2xl lg:text-3xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors p-2" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors p-2" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors p-2" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="https://spotify.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors p-2" aria-label="Spotify"><i class="fa-brands fa-spotify"></i></a>
                    <a href="https://apple.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors p-2" aria-label="Apple Music"><i class="fa-brands fa-apple"></i></a>
                </div>
            </div>

            <!-- LABEL TEAM -->
            <div class="mt-16 pt-12 border-t border-amber-500/20">
                <h3 class="text-xl font-black tracking-widest text-amber-400 mb-8 text-center uppercase flex items-center justify-center gap-3">
                    <i class="fa-solid fa-compact-disc"></i> LABEL TEAM <i class="fa-solid fa-compact-disc"></i>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    
                    <!-- Osagioduwa Malkin -->
                    <div class="bg-zinc-950 p-3 border border-zinc-800 text-center group cursor-pointer hover:border-amber-400 transition-all">
                        <div class="aspect-square bg-zinc-900 mb-2 overflow-hidden relative">
                            <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/v1787409365/CEO_Guud_Muzik_e8mfou.jpg" class="w-full h-full object-cover object-top filter grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-300">
                            <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#ffd700]"></span>
                        </div>
                        <p class="font-black text-xs md:text-sm text-white uppercase tracking-wider">Osagioduwa Malkin</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase">Founder / CEO / MD</p>
                    </div>

                    <!-- David Collins -->
                    <div class="bg-zinc-950 p-3 border border-zinc-800 text-center group cursor-pointer hover:border-amber-400 transition-all">
                        <div class="aspect-square bg-zinc-900 mb-2 overflow-hidden relative">
                            <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/v1787721440/A_R_DAVID_unrc2b.jpg" class="w-full h-full object-cover object-top filter grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-300">
                            <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#ffd700]"></span>
                        </div>
                        <p class="font-black text-xs md:text-sm text-white uppercase tracking-wider">David Collins</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase">A&R, Head of Publishing Admin & Marketing</p>
                    </div>

                    <!-- Prince Iyke -->
                    <div class="bg-zinc-950 p-3 border border-zinc-800 text-center group cursor-pointer hover:border-amber-400 transition-all">
                        <div class="aspect-square bg-zinc-900 mb-2 overflow-hidden relative">
                            <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/v1787721449/head_of_operation_new_n3v32t.jpg" class="w-full h-full object-cover object-top filter grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-300">
                            <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#ffd700]"></span>
                        </div>
                        <p class="font-black text-xs md:text-sm text-white uppercase tracking-wider">Pince Iyke</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase">Road Manager & Head of Operations</p>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- MUSIC SECTION (DISCOGRAPHY) -->
    <section id="music" class="py-20 px-4 md:px-12 bg-black border-t border-amber-500/20">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col items-center mb-10">
                <h2 class="text-5xl md:text-8xl font-black text-center tracking-tight text-white uppercase font-impact mt-2">
                    DISCOGRAPHY
                </h2>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                
                <!-- GUUD NEWS (NEW) -->
                <a href="https://distrokid.com/hyperfollow/oduwa/guud-news/" target="_blank" rel="noreferrer" class="album-card group relative block">
                    <div class="aspect-square bg-zinc-900 overflow-hidden relative border border-amber-500/30">
                        <img src="https://res.cloudinary.com/dccxjo9x8/image/upload/v1784191527/GUUD_NEWS_SINGLE_COVER_t7efxo.jpg" alt="GUUD NEWS" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i class="fa-solid fa-arrow-up-right-from-square text-amber-400 text-3xl shadow-xl"></i>
                        </div>
                    </div>
                    <div class="p-2 text-center">
                        <p class="font-black text-xs text-white truncate uppercase">GUUD NEWS</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase truncate">(NEW SINGLE)</p>
                    </div>
                </a>

                <!-- BELLY DANCER -->
                <a href="https://fanlink.tv/xaFj" target="_blank" rel="noreferrer" class="album-card group relative block">
                    <div class="aspect-square bg-zinc-900 overflow-hidden relative border border-amber-500/30">
                        <img src="https://i.postimg.cc/15dCNbgC/belly-dancer-new-single-2.png" alt="BELLY DANCER" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i class="fa-solid fa-arrow-up-right-from-square text-amber-400 text-3xl shadow-xl"></i>
                        </div>
                    </div>
                    <div class="p-2 text-center">
                        <p class="font-black text-xs text-white truncate uppercase">BELLY DANCER</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase truncate">ODUWA</p>
                    </div>
                </a>

                <!-- SAPA -->
                <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" class="album-card group relative block">
                    <div class="aspect-square bg-zinc-900 overflow-hidden relative border border-amber-500/30">
                        <img src="https://i.postimg.cc/vmYQx1x1/SAPA.png" alt="SAPA" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i class="fa-solid fa-arrow-up-right-from-square text-amber-400 text-3xl shadow-xl"></i>
                        </div>
                    </div>
                    <div class="p-2 text-center">
                        <p class="font-black text-xs text-white truncate uppercase">SAPA</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase truncate">ODUWA</p>
                    </div>
                </a>

                <!-- OVBIALEKE -->
                <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" class="album-card group relative block">
                    <div class="aspect-square bg-zinc-900 overflow-hidden relative border border-amber-500/30">
                        <img src="https://i.postimg.cc/vmYQx1xc/OVBIALEKE.png" alt="OVBIALEKE" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i class="fa-solid fa-arrow-up-right-from-square text-amber-400 text-3xl shadow-xl"></i>
                        </div>
                    </div>
                    <div class="p-2 text-center">
                        <p class="font-black text-xs text-white truncate uppercase">OVBIALEKE</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase truncate">ODUWA</p>
                    </div>
                </a>

                <!-- SON OF MAN -->
                <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" class="album-card group relative block">
                    <div class="aspect-square bg-zinc-900 overflow-hidden relative border border-amber-500/30">
                        <img src="https://i.postimg.cc/wBw9X6DL/SON%20OF%20MAN.png" alt="SON OF MAN" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i class="fa-solid fa-arrow-up-right-from-square text-amber-400 text-3xl shadow-xl"></i>
                        </div>
                    </div>
                    <div class="p-2 text-center">
                        <p class="font-black text-xs text-white truncate uppercase">SON OF MAN</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase truncate">ODUWA</p>
                    </div>
                </a>

                <!-- WONDERFUL -->
                <a href="https://linktr.ee/oduwa" target="_blank" rel="noreferrer" class="album-card group relative block">
                    <div class="aspect-square bg-zinc-900 overflow-hidden relative border border-amber-500/30">
                        <img src="https://i.postimg.cc/nL3n4HqQ/WONDERFUL.png" alt="WONDERFUL" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i class="fa-solid fa-arrow-up-right-from-square text-amber-400 text-3xl shadow-xl"></i>
                        </div>
                    </div>
                    <div class="p-2 text-center">
                        <p class="font-black text-xs text-white truncate uppercase">WONDERFUL</p>
                        <p class="text-[10px] text-amber-400 font-bold uppercase truncate">ODUWA</p>
                    </div>
                </a>

            </div>
        </div>
    </section>

    <!-- TOUR SECTION -->
    <section id="tour" class="py-20 px-4 md:px-12 bg-zinc-950 border-t border-amber-500/20">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl md:text-7xl font-black text-center tracking-tight text-white mb-10 uppercase font-impact">
                WORLD TOUR DATES
            </h2>

            <div class="space-y-3">
                <div class="bg-black p-4 md:p-6 border border-zinc-800 hover:border-amber-500/50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <span class="text-amber-400 font-black text-sm tracking-widest uppercase flex items-center gap-2">
                            <i class="fa-solid fa-star text-xs"></i> OCT 14, 2026
                        </span>
                        <h3 class="text-white font-black text-lg md:text-xl uppercase">NEW YORK CITY, NY</h3>
                        <p class="text-zinc-400 text-xs font-semibold uppercase">MADISON SQUARE GARDEN</p>
                    </div>
                    <button onclick="openModal('Ticket Info', 'Tickets for MSG New York are selling fast. Presale code: GUUD2026')" class="bg-zinc-800 hover:bg-amber-500 hover:text-black text-white font-black text-xs md:text-sm px-6 py-2.5 uppercase tracking-widest transition-all w-full md:w-auto border border-zinc-700">
                        GET TICKETS
                    </button>
                </div>

                <div class="bg-black p-4 md:p-6 border border-zinc-800 hover:border-amber-500/50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <span class="text-amber-400 font-black text-sm tracking-widest uppercase flex items-center gap-2">
                            <i class="fa-solid fa-star text-xs"></i> NOV 02, 2026
                        </span>
                        <h3 class="text-white font-black text-lg md:text-xl uppercase">LOS ANGELES, CA</h3>
                        <p class="text-zinc-400 text-xs font-semibold uppercase">THE CRYPTO.COM ARENA</p>
                    </div>
                    <button onclick="openModal('Ticket Info', 'Tickets for Los Angeles Arena are available now.')" class="bg-zinc-800 hover:bg-amber-500 hover:text-black text-white font-black text-xs md:text-sm px-6 py-2.5 uppercase tracking-widest transition-all w-full md:w-auto border border-zinc-700">
                        GET TICKETS
                    </button>
                </div>

                <div class="bg-black p-4 md:p-6 border border-zinc-800 hover:border-amber-500/50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <span class="text-amber-400 font-black text-sm tracking-widest uppercase flex items-center gap-2">
                            <i class="fa-solid fa-star text-xs"></i> NOV 18, 2026
                        </span>
                        <h3 class="text-white font-black text-lg md:text-xl uppercase">LONDON, UK</h3>
                        <p class="text-zinc-400 text-xs font-semibold uppercase">THE O2 ARENA</p>
                    </div>
                    <button onclick="openModal('Ticket Info', 'London O2 Arena presale starts Friday.')" class="bg-zinc-800 hover:bg-amber-500 hover:text-black text-white font-black text-xs md:text-sm px-6 py-2.5 uppercase tracking-widest transition-all w-full md:w-auto border border-zinc-700">
                        GET TICKETS
                    </button>
                </div>

                <div class="bg-black p-4 md:p-6 border border-zinc-800 hover:border-amber-500/50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <span class="text-amber-400 font-black text-sm tracking-widest uppercase flex items-center gap-2">
                            <i class="fa-solid fa-star text-xs"></i> DEC 05, 2026
                        </span>
                        <h3 class="text-white font-black text-lg md:text-xl uppercase">LAGOS, NIGERIA</h3>
                        <p class="text-zinc-400 text-xs font-semibold uppercase">EKO ENERGY CITY COMPLEX</p>
                    </div>
                    <button onclick="openModal('Ticket Info', 'Lagos Super Concert VIP Pass available!')" class="bg-zinc-800 hover:bg-amber-500 hover:text-black text-white font-black text-xs md:text-sm px-6 py-2.5 uppercase tracking-widest transition-all w-full md:w-auto border border-zinc-700">
                        GET TICKETS
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- HISTORY SECTION -->
    <section id="history" class="py-24 px-6 md:px-16 bg-black border-t border-amber-500/20">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-7xl font-black tracking-tight text-white mb-8 uppercase font-impact">
                HISTORY OF THE LABEL
            </h2>

            <h3 class="text-amber-400 font-black text-lg md:text-xl tracking-widest mb-2 uppercase">
                OVERVIEW
            </h3>

            <h4 class="text-white font-black text-xl md:text-2xl tracking-widest mb-8 uppercase logo-3d inline-block">
                GUUD MUZIK RECORDS
            </h4>

            <div class="space-y-6 text-zinc-300 font-semibold text-sm md:text-base leading-relaxed tracking-wider text-justify uppercase max-w-3xl mx-auto">
                <p>
                    THERE'S A PIVOTAL MOMENT IN EVERY MAJOR MOGUL'S CAREER WHEN HE CAN LOOK BACK AT HIS MYRIAD OF ACCOMPLISHMENTS AND POINT TO THE MOST IMPACTFUL PIECE OF ADVICE HE EVER RECEIVED. FOR THE FOUNDERS OF THE POWERHOUSE LABEL GUUD MUZIK RECORDS, THE WISEST WORDS CAME FROM THEIR ROOTS.
                </p>

                <p>
                    "ALWAYS BE ABOUT YOUR OWN BUSINESS," EXPLAINS THE FOUNDER. "AND BE YOUR OWN BOSS, SO YOU CAN USE YOUR SKILLS AND BE CREATIVE."
                </p>

                <div id="fullHistoryBio" class="hidden space-y-6 pt-2">
                    <p>
                        FROM INDEPENDENT DISTRIBUTION TO GLOBAL DOMINANCE, GUUD MUZIK RECORDS HAS BUILT AN UNSTOPPABLE EMPIRE OF CHART-TOPPING ARTISTS, GENRE-DEFINING SOUNDS, AND UNRIVALED CULTURAL IMPACT. BUILT ON DETERMINATION, PLATINUM HITS, AND UNWAVERING INDEPENDENCE, GUUD MUZIK REMAINS A DRIVING FORCE IN WORLDWIDE MUSIC ARCHITECTURE.
                    </p>
                </div>
            </div>

            <div class="mt-10">
                <button id="readMoreBtn" onclick="toggleReadMore()" 
                        class="bg-zinc-900 hover:bg-amber-500 hover:text-black text-white font-black text-sm md:text-base px-10 py-3 uppercase tracking-widest border border-amber-500/40 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    READ MORE
                </button>
            </div>
        </div>
    </section>

    <!-- PERSISTENT AUDIO PLAYER -->
    <div id="audioPlayerBar" class="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 border-t border-amber-500/30 px-4 py-3 transform translate-y-full transition-transform duration-300 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <img id="playerCover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=100&auto=format&fit=crop" class="w-10 h-10 object-cover border border-amber-400">
                <div>
                    <p id="playerTrackTitle" class="font-black text-xs md:text-sm text-white uppercase truncate">NOW PLAYING</p>
                    <p id="playerArtist" class="text-[10px] text-amber-400 font-bold uppercase">GUUD MUZIK RECORDS</p>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <button onclick="toggleAudioPlay()" id="playPauseAudioBtn" class="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                    <i class="fa-solid fa-pause text-base"></i>
                </button>
                <button onclick="closeAudioPlayer()" class="text-zinc-400 hover:text-amber-400 p-2">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            
            <audio id="globalAudioElement" class="hidden"></audio>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-black py-12 px-6 border-t border-amber-500/20 text-center">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-black tracking-widest text-zinc-400 uppercase">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>© GUUD MUZIK RECORDS</span>
            </div>

            <div class="flex items-center space-x-6">
                <a href="#privacy" onclick="openModal('Privacy Policy', 'Standard privacy notice for Guud Muzik visitors.')" class="hover:text-amber-400 transition-colors">PRIVACY POLICY</a>
                <a href="#terms" onclick="openModal('Terms of Use', 'All audio content, trademarks and visuals belong strictly to Guud Muzik Records.')" class="hover:text-amber-400 transition-colors">TERMS OF USE</a>
            </div>

            <div class="flex items-center space-x-5 text-lg text-white">
                <a href="https://x.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors" aria-label="X Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://facebook.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </footer>

    <!-- MODAL POPUPS -->
    <div id="generalModal" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm hidden items-center justify-center p-4">
        <div class="bg-zinc-950 border border-amber-500/40 p-6 md:p-8 max-w-md w-full shadow-[0_0_30px_rgba(212,175,55,0.2)] relative text-left">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-zinc-400 hover:text-amber-400 text-xl">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h3 id="modalTitle" class="text-xl font-black text-amber-400 uppercase mb-4 tracking-wider">MODAL TITLE</h3>
            <p id="modalBody" class="text-zinc-300 font-semibold text-xs md:text-sm leading-relaxed uppercase tracking-wider mb-6">
                Modal contents go here...
            </p>
            <button onclick="closeModal()" class="gold-gradient-btn font-black text-xs px-6 py-2.5 uppercase tracking-widest w-full">
                CLOSE
            </button>
        </div>
    </div>

    <div id="videoModal" class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md hidden items-center justify-center p-4">
        <div class="max-w-4xl w-full bg-black border border-amber-500/40 p-2 relative">
            <div class="flex justify-between items-center px-4 py-2 bg-zinc-950 border-b border-amber-500/20">
                <span id="videoModalTitle" class="font-black text-sm text-amber-400 uppercase tracking-wider">GUUD MUZIK VIDEO</span>
                <button onclick="closeVideoModal()" class="text-zinc-400 hover:text-white text-xl p-1">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="aspect-video w-full bg-zinc-900 mt-2">
                <iframe id="videoIframe" class="w-full h-full" src="" title="Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <script>
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Hero Slider Controls
        const heroSlides = [
            { name: "ODUWA (1/3)" },
            { name: "ODUWA (2/3)" },
            { name: "ODUWA (3/3)" }
        ];
        
        let currentSlideIndex = 0;
        let heroSlideInterval = null;

        function updateHeroSlide() {
            const track = document.getElementById('heroSliderTrack');
            const badge = document.getElementById('currentArtistBadge');
            if (!track || !badge) return;

            track.style.transform = `translateX(-${currentSlideIndex * 33.333}%)`;
            badge.innerText = heroSlides[currentSlideIndex].name;
        }

        function nextHeroSlide() {
            currentSlideIndex++;
            if (currentSlideIndex >= heroSlides.length) {
                currentSlideIndex = 0;
            }
            updateHeroSlide();
        }

        function prevHeroSlide() {
            currentSlideIndex--;
            if (currentSlideIndex < 0) {
                currentSlideIndex = heroSlides.length - 1;
            }
            updateHeroSlide();
        }

        function startHeroAutoSlide() {
            if (heroSlideInterval) clearInterval(heroSlideInterval);
            heroSlideInterval = setInterval(() => {
                nextHeroSlide();
            }, 4000);
        }

        window.addEventListener('DOMContentLoaded', () => {
            startHeroAutoSlide();
            populateCountries();
        });

        function populateCountries() {
            const countries = [
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
            ];
            
            const dataList = document.getElementById('countryList');
            if (dataList) {
                countries.forEach(country => {
                    const option = document.createElement('option');
                    option.value = country.toUpperCase();
                    dataList.appendChild(option);
                });
            }
        }

        function handleNewsletterSubmit(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            const emailError = document.getElementById('emailError');
            const newsletterSuccess = document.getElementById('newsletterSuccess');

            if (!email || !email.includes('@')) {
                emailError.classList.remove('hidden');
                return;
            }

            emailError.classList.add('hidden');
            newsletterSuccess.classList.remove('hidden');
            
            setTimeout(() => {
                newsletterSuccess.classList.add('hidden');
            }, 5000);
        }

        function toggleReadMore() {
            const bio = document.getElementById('fullHistoryBio');
            const btn = document.getElementById('readMoreBtn');
            if (bio.classList.contains('hidden')) {
                bio.classList.remove('hidden');
                btn.innerText = 'READ LESS';
            } else {
                bio.classList.add('hidden');
                btn.innerText = 'READ MORE';
            }
        }

        const audioElement = document.getElementById('globalAudioElement');
        const audioPlayerBar = document.getElementById('audioPlayerBar');
        const playerTrackTitle = document.getElementById('playerTrackTitle');
        const playerCover = document.getElementById('playerCover');
        const playPauseAudioBtn = document.getElementById('playPauseAudioBtn');

        function toggleAudioPlay() {
            if (audioElement.paused) {
                audioElement.play();
                playPauseAudioBtn.innerHTML = '<i class="fa-solid fa-pause text-base"></i>';
            } else {
                audioElement.pause();
                playPauseAudioBtn.innerHTML = '<i class="fa-solid fa-play text-base pl-0.5"></i>';
            }
        }

        function closeAudioPlayer() {
            audioElement.pause();
            audioPlayerBar.classList.add('translate-y-full');
        }

        function openModal(title, body) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalBody').innerText = body;
            const modal = document.getElementById('generalModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeModal() {
            const modal = document.getElementById('generalModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function openVideoModal(url, title) {
            document.getElementById('videoModalTitle').innerText = title;
            document.getElementById('videoIframe').src = url;
            const modal = document.getElementById('videoModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeVideoModal() {
            document.getElementById('videoIframe').src = '';
            const modal = document.getElementById('videoModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function handleImageError(e) {
            e.target.src = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop';
        }
    </script>
</body>
</html>
