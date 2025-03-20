/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			text: {
				DEFAULT: '#262626',
				0: '#f2f2f2',
				50: '#0d0d0d',
				100: '#1a1a1a',
				200: '#333333',
				900: '#0d0d0d',
				950: '#f2f2f2',
			},
			background: {
				DEFAULT: '#FFFFFF',
				// 50: '#0d0d0d',
				// 100: '#1a1a1a',
				200: '#1E293B',
				// 300: '#4d4d4d',
				// 400: '#666666',
				// 500: '#808080',
				// 600: '#999999',
				// 700: '#b3b3b3',
				// 800: '#cccccc',
				900: '#0d0d0d',
				// 950: '#f2f2f2',
			},
			primary: {
				DEFAULT: '#006837',
				foreground: '#FFFFFF',
				50: '#F0FDF4',
				// 100: '#0a290a',
				// 200: '#145214',
				// 300: '#1e7b1e',
				// 400: '#28a428',
				// 500: '#32cd32', // previous
				// 600: '#5bd75b',
				700: '#84e184',
				// 800: '#adebad',
				// 900: '#d6f5d6',
			},
			secondary: {
				DEFAULT: '#C4262B',
				foreground: '#FFFFFF',
				50: '#ffece5', // worked
				100: '#ff8f66', // worked
				200: '#661b00',
				300: '#992900',
				400: '#cc3600',
				500: '#ff4400',
				600: '#ff6933',
				700: '#ff8f66',
				800: '#ffb499',
				900: '#ffdacc',
				950: '#ffece5',
			},
			accent: {
				DEFAULT: '#333333',
				foreground: '#FFFFFF',
				50: '#0d0d0d',
				100: '#1a1a1a',
				200: '#333333',
				300: '#4d4d4d',
				400: '#666666',
				500: '#808080',
				600: '#999999',
				700: '#b3b3b3',
				800: '#cccccc',
				900: '#e6e6e6',
				950: '#f2f2f2',
			},

			// new colors

  			blue: {
  				'1': '#F2F7FB',
  				'5': '#2275FC'
  			},
  			gray: {
				'2': '#F7F9FD',
  				'3': '#BDC7D3',
  				'8': '#575864'
  			},
  			orange: {
  				'2': '#FFF2ED',
  				'5': '#FF5200'
  			},
  			green: {
  				'2': '#F0FDF4',
  				'5': '#22C55E'
  			},
  			hr: '#E6EFF6',
  			notification: 'rgba(203, 213,244,.31)',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
			"caret-blink": {
				"0%,70%,100%": { opacity: "1" },
				"20%,50%": { opacity: "0" },
			},
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			"caret-blink": "caret-blink 1.25s ease-out infinite",
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

