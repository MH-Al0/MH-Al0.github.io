document.addEventListener('DOMContentLoaded', () => {
    try {
        let CurrentLanguage123 = 'fr';

        const TranslationsMap123 = {
            fr: {
                navAbout: "À propos",
                navProjects: "Projets",
                navSkills: "Skills",
                navContact: "Contact",
                heroTitle: "Mohamed H<span>.</span>",
                heroTagline: "Développeur & Explorateur de Systèmes",
                aboutTitle: "À propos",
                aboutText: "Étudiant passionné d'informatique, spécialisé dans l'innovation technique et l'administration système. Mon approche mélange rigueur scientifique et créativité logicielle.",
                projectsTitle: "Projets Sélectionnés",
                proj1Title: "Serveur Maison",
                proj1Desc: "Migration d'un hardware de 2011 vers une architecture Arch Linux optimisée pour le self-hosting.",
                proj2Title: "XOR Brute-Forcer",
                proj2Desc: "Outil de cryptanalyse utilisant le beam search et le scoring fréquentiel pour casser des chiffrements XOR.",
                proj3Title: "Rocket Sim",
                proj3Desc: "Simulateur de trajectoire basé sur NumPy/SciPy intégrant traînée atmosphérique et poussée variable.",
                proj4Title: "WardenHeart",
                proj4Desc: "Module serveur Java de récompenses dynamiques avec gestion d'événements temps réel et config YAML.",
                skillsTitle: "Expertise",
                skill1: "Python / JS / Java",
                skill2: "Admin Linux",
                skill3: "Résolution de Problèmes",
                skill4: "Français / Anglais / Arabe",
                contactTitle: "Prêt à collaborer ?",
                contactQuote: "\"La connaissance n'a aucune valeur si vous ne la mettez pas en pratique.\""
            },
            en: {
                navAbout: "About",
                navProjects: "Projects",
                navSkills: "Skills",
                navContact: "Contact",
                heroTitle: "Mohamed H<span>.</span>",
                heroTagline: "Developer & Systems Explorer",
                aboutTitle: "About",
                aboutText: "Passionate computer science student, specialized in technical innovation and system administration. My approach blends scientific rigor with software creativity.",
                projectsTitle: "Selected Projects",
                proj1Title: "Home Server",
                proj1Desc: "Migration of a 2011 hardware to an Arch Linux architecture optimized for self-hosting.",
                proj2Title: "XOR Brute-Forcer",
                proj2Desc: "Cryptanalysis tool using beam search and frequency scoring to break XOR ciphers.",
                proj3Title: "Rocket Sim",
                proj3Desc: "Trajectory simulator based on NumPy/SciPy incorporating atmospheric drag and variable thrust.",
                proj4Title: "WardenHeart",
                proj4Desc: "Java server module for dynamic rewards with real-time event handling and YAML config.",
                skillsTitle: "Expertise",
                skill1: "Python / JS / Java",
                skill2: "Linux Admin",
                skill3: "Problem Solving",
                skill4: "French / English / Arabic",
                contactTitle: "Ready to collaborate?",
                contactQuote: "\"Knowledge is of no value unless you put it into practice.\""
            }
        };

        // Intersection Observer pour les animations
        const Observer123 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => Observer123.observe(el));

        // Thème clair/sombre
        const ThemeToggleBtn123 = document.getElementById('theme-toggle');
        ThemeToggleBtn123.addEventListener('click', () => {
            const DocElement123 = document.documentElement;
            const newTheme123 = DocElement123.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            DocElement123.setAttribute('data-theme', newTheme123);
            ThemeToggleBtn123.innerHTML = newTheme123 === 'dark' ? '☼' : '☾';
        });

        // Traduction FR ↔ EN  — Bug 1 (corrected)
        const LangToggleBtn123 = document.getElementById('lang-toggle');
        const LangToggleAction123 = () => {
            CurrentLanguage123 = CurrentLanguage123 === 'fr' ? 'en' : 'fr';
            LangToggleBtn123.textContent = CurrentLanguage123 === 'fr' ? 'EN' : 'FR';

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const Key123 = el.getAttribute('data-i18n');
                const translation123 = TranslationsMap123[CurrentLanguage123][Key123];
                if (translation123) {
                    el.innerHTML = Key123 === 'heroTitle' ? translation123 : '';
                    if (Key123 !== 'heroTitle') el.textContent = translation123;
                }
            });
        };
        // Bug 2 (corrected)
        LangToggleBtn123.addEventListener('click', LangToggleAction123);

        // Smooth scroll
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('href');
                if (target) document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
            });
        });

    } catch (error) {
        console.error('Operation failed:', error);
    }
});
