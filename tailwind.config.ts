
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
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
				// Updated HumbleStudio Brand Colors
				humble: {
					// Primary colors
					navy: {
						DEFAULT: '#0A1128',
						500: '#0A1128'
					},
					charcoal: {
						DEFAULT: '#1C1C28',
						500: '#1C1C28'
					},
					// Accent colors
					blue: {
						DEFAULT: '#0082FF',
						400: '#50A7FF',
						500: '#0082FF',
						600: '#0066CC'
					},
					green: {
						DEFAULT: '#10B981',
						400: '#4ADE80',
						500: '#10B981',
						600: '#059669'
					},
					purple: {
						DEFAULT: '#9D4EDD',
						400: '#B87CEE',
						500: '#9D4EDD',
						600: '#8126C5'
					},
					mint: {
						DEFAULT: '#00F5D4',
						400: '#5DFAE2',
						500: '#00F5D4',
						600: '#00C4AA'
					},
					yellow: {
						DEFAULT: '#FFD166',
						300: '#FFE0A3',
						400: '#FFDB8F',
						500: '#FFD166',
						600: '#EFBD47'
					},
					gray: {
						50: '#F9FAFB',
						100: '#F3F4F6',
						200: '#E5E7EB',
						300: '#D1D5DB',
						400: '#9CA3AF',
						500: '#6B7280',
						600: '#4B5563',
						700: '#374151',
						800: '#1F2937',
						900: '#0F1220'
					}
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
				'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
				'satoshi': ['Satoshi', 'sans-serif']
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(90deg, var(--humble-blue-500), var(--humble-purple-500))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
