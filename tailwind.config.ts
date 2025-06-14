import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1280px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Updated HumbleStudio Brand Colors - much darker
				humble: {
					// Primary colors - almost black with blue tint
					navy: {
						DEFAULT: '#000308',
						500: '#000308'
					},
					charcoal: {
						DEFAULT: '#0A0A1A',
						500: '#0A0A1A'
					},
					// Accent colors from logo
					pink: {
						DEFAULT: '#FF4B7C',
						300: '#FF78A0',
						400: '#FF5F8C',
						500: '#FF4B7C',
						600: '#E3355F'
					},
					blue: {
						DEFAULT: '#3466FF',
						400: '#5080FF',
						500: '#3466FF',
						600: '#244EE0'
					},
					purple: {
						DEFAULT: '#B72DEC',
						400: '#C955F6',
						500: '#B72DEC',
						600: '#9721C8'
					},
					indigo: {
						DEFAULT: '#6236FF',
						400: '#7D5BFF',
						500: '#6236FF',
						600: '#4E20E0'
					},
					// Supporting colors - darker versions
					gray: {
						50: '#F9FAFB',
						100: '#F3F4F6',
						200: '#E5E7EB',
						300: '#D1D5DB',
						400: '#9CA3AF',
						500: '#6B7280',
						600: '#4B5563',
						700: '#0F1020',
						800: '#050510',
						900: '#000308'
					}
				},
				// New Brand Colors - darker versions
				brand: {
					// Primary
					'neon-pink': '#FF007F',
					'black': '#000000',
					'white': '#FFFFFF',
					// Secondary
					'warm-gray': '#F5F5F5',
					'charcoal-gray': '#050510',
					// Accent
					'cool-beige': '#EAE4DC',
					'electric-blue': '#3D5AFE'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'logo-gradient': 'linear-gradient(135deg, var(--humble-pink-500), var(--humble-purple-500), var(--humble-blue-500))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'star-twinkle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'star-twinkle': 'star-twinkle 2s ease-in-out infinite'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
				'playfair': ['"Playfair Display"', 'serif'],
				'satoshi': ['Satoshi', 'sans-serif'],
				'serif': ['"Playfair Display"', 'Georgia', '"Source Serif Pro"', '"Libre Baskerville"', 'serif']
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(90deg, var(--humble-pink-500), var(--humble-purple-500))'
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				'base': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
				'2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
