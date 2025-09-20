/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sikkim-inspired color palette
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Main blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15', // Saffron/Golden
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899', // Pink accent
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        monastery: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fcd9b8',
          300: '#f9be8a',
          400: '#f59e5c',
          500: '#f17e2e', // Monastery orange
          600: '#e85d04',
          700: '#c44103',
          800: '#9c3403',
          900: '#7d2b02',
          950: '#441501',
        },
        cultural: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16', // Cultural green
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
          950: '#1a2e05',
        },
        spiritual: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Spiritual purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        tibetan: ['Noto Sans Tibetan', 'serif'],
        nepali: ['Noto Sans Devanagari', 'serif'],
        hindi: ['Noto Sans Devanagari', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
        '7xl': ['4.5rem', { lineHeight: '5rem' }],
        '8xl': ['6rem', { lineHeight: '6.5rem' }],
        '9xl': ['8rem', { lineHeight: '8.5rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hard': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'monastery': '0 8px 32px rgba(241, 126, 46, 0.15)',
        'spiritual': '0 8px 32px rgba(168, 85, 247, 0.15)',
        'cultural': '0 8px 32px rgba(132, 204, 22, 0.15)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-monastery': '0 0 20px rgba(241, 126, 46, 0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        bounceSoft: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-15px,0)' },
          '70%': { transform: 'translate3d(0,-7px,0)' },
          '90%': { transform: 'translate3d(0,-2px,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        shimmer: {
          '0%': {
            'background-position': '-200% 0'
          },
          '100%': {
            'background-position': '200% 0'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-monastery': 'linear-gradient(135deg, #f59e5c, #f17e2e)',
        'gradient-spiritual': 'linear-gradient(135deg, #c084fc, #a855f7)',
        'gradient-cultural': 'linear-gradient(135deg, #bef264, #84cc16)',
        'gradient-hero': 'linear-gradient(135deg, #0ea5e9, #a855f7, #f17e2e)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        'mountain-pattern': "url('/images/mountain-pattern.svg')",
        'prayer-flags': "url('/images/prayer-flags-pattern.svg')",
      },
      backdropBlur: {
        xs: '2px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      aspectRatio: {
        'monastery': '4/3',
        'hero': '21/9',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    // Custom plugin for utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.15)',
        },
        '.glass': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.75)',
          'border': '1px solid rgba(255, 255, 255, 0.125)',
        },
        '.glass-dark': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(0, 0, 0, 0.75)',
          'border': '1px solid rgba(255, 255, 255, 0.125)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
