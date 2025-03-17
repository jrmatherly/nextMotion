/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { heroui } from '@heroui/theme';
import type { Config } from 'tailwindcss';

const svgToDataUri = require('mini-svg-data-uri');

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-95%, -90%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -80%) scale(1)',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        shimmer: {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shimmer-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shimmer-width)) 0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        shimmer: 'shimmer 8s infinite',
      },
      fontFamily: {
        mono: [
          "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        ],
        sans: [
          "var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        ],
      },
      fontSize: {
        '48-96': 'var(--fluid-48-96)',
        '24-40': 'var(--fluid-24-40)',
      },
      spacing: {
        '300-600': 'var(--fluid-300-600)',
      },
      boxShadow: {
        input:
          '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
      },
    },
  },
  plugins: [
    heroui({
      layout: {
        borderWidth: {
          large: '3px', // border-large
          medium: '2px', // border-medium (default)
          small: '1px', // border-small
        },
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        hoverOpacity: '0.9',
        fontSize: {
          large: '1.125rem', // text-large
          medium: '1rem', // text-medium
          small: '0.875rem', // text-small
          tiny: '0.75rem', // text-tiny
        },
        lineHeight: {
          large: '1.75rem', // text-large
          medium: '1.5rem', // text-medium
          small: '1.25rem', // text-small
          tiny: '1rem', // text-tiny
        },
        radius: {
          large: '0.875rem', // rounded-large
          medium: '0.75rem', // rounded-medium
          small: '0.5rem', // rounded-small
        },
      },
      themes: {
        dark: {
          // dark theme colors
          colors: {
            default: {
              50: '#061c23',
              100: '#0a303c',
              200: '#0e4354',
              300: '#12576d',
              400: '#477d8e',
              500: '#7da3af',
              600: '#b2c8d0',
              700: '#e7eef0',
              foreground: '#fff',
              DEFAULT: '#0e4354',
            },
            primary: {
              50: '#073934',
              100: '#0d6158',
              200: '#12887c',
              300: '#17b0a0',
              400: '#4bc2b5',
              500: '#7fd4cb',
              600: '#b4e5e0',
              700: '#e8f7f6',
              foreground: '#000',
              DEFAULT: '#12887c',
            },
            secondary: {
              50: '#3d0135',
              100: '#67025a',
              200: '#92027f',
              300: '#bc03a4',
              400: '#cb3cb8',
              500: '#da74cd',
              600: '#e9ade1',
              700: '#f8e6f6',
              foreground: '#fff',
              DEFAULT: '#92027f',
            },
            success: {
              50: '#074120',
              100: '#0d6f37',
              200: '#129c4e',
              300: '#17c964',
              400: '#4bd587',
              500: '#7fe1aa',
              600: '#b4edcd',
              700: '#e8faf0',
              foreground: '#000',
              DEFAULT: '#129c4e',
            },
            warning: {
              50: '#50360c',
              100: '#875b14',
              200: '#be801c',
              300: '#f5a524',
              400: '#f7b955',
              500: '#face87',
              600: '#fce2b8',
              700: '#fef6e9',
              foreground: '#000',
              DEFAULT: '#be801c',
            },
            danger: {
              50: '#4a0000',
              100: '#7e0000',
              200: '#b10000',
              300: '#e50000',
              400: '#eb3939',
              500: '#f17373',
              600: '#f7acac',
              700: '#fce6e6',
              foreground: '#fff',
              DEFAULT: '#b10000',
            },
            background: '#000000',
            foreground: {
              50: '#535353',
              100: '#8c8c8c',
              200: '#c6c6c6',
              300: '#ffffff',
              400: '#ffffff',
              500: '#ffffff',
              600: '#ffffff',
              700: '#ffffff',
              foreground: '#000',
              DEFAULT: '#c6c6c6',
            },
            content1: {
              DEFAULT: '#18181b',
              foreground: '#fff',
            },
            content2: {
              DEFAULT: '#1f1f22',
              foreground: '#fff',
            },
            content3: {
              DEFAULT: '#3f3f46',
              foreground: '#fff',
            },
            content4: {
              DEFAULT: '#52525b',
              foreground: '#fff',
            },
            focus: '#17b0a0',
            overlay: '#ffffff',
            divider: '#12576d',
          },
          // dark theme layout tokens
          layout: {
            boxShadow: {
              // shadow-large
              large:
                '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              // shadow-medium
              medium:
                '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              // shadow-small
              small:
                '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
            },
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
          },
        },
        light: {
          // light theme colors
          colors: {
            default: {
              50: '#fafafa',
              100: '#f2f2f3',
              200: '#ebebec',
              300: '#e3e3e6',
              400: '#dcdcdf',
              500: '#d4d4d8',
              600: '#afafb2',
              700: '#8a8a8c',
              800: '#656567',
              900: '#404041',
              foreground: '#000',
              DEFAULT: '#d4d4d8',
            },
            primary: {
              50: '#e2f5f3',
              100: '#b9e7e3',
              200: '#91d9d2',
              300: '#68ccc1',
              400: '#40beb1',
              500: '#17b0a0',
              600: '#139184',
              700: '#0f7268',
              800: '#0b544c',
              900: '#073530',
              foreground: '#000',
              DEFAULT: '#17b0a0',
            },
            secondary: {
              50: '#f7e0f4',
              100: '#ebb3e4',
              200: '#df87d4',
              300: '#d35bc4',
              400: '#c82fb4',
              500: '#bc03a4',
              600: '#9b0287',
              700: '#7a026b',
              800: '#59014e',
              900: '#380131',
              foreground: '#fff',
              DEFAULT: '#bc03a4',
            },
            success: {
              50: '#e2f8ec',
              100: '#b9efd1',
              200: '#91e5b5',
              300: '#68dc9a',
              400: '#40d27f',
              500: '#17c964',
              600: '#13a653',
              700: '#0f8341',
              800: '#0b5f30',
              900: '#073c1e',
              foreground: '#000',
              DEFAULT: '#17c964',
            },
            warning: {
              50: '#fef4e4',
              100: '#fce4bd',
              200: '#fad497',
              300: '#f9c571',
              400: '#f7b54a',
              500: '#f5a524',
              600: '#ca881e',
              700: '#9f6b17',
              800: '#744e11',
              900: '#4a320b',
              foreground: '#000',
              DEFAULT: '#f5a524',
            },
            danger: {
              50: '#fcdfdf',
              100: '#f7b3b3',
              200: '#f38686',
              300: '#ee5959',
              400: '#ea2d2d',
              500: '#e50000',
              600: '#bd0000',
              700: '#950000',
              800: '#6d0000',
              900: '#450000',
              foreground: '#fff',
              DEFAULT: '#e50000',
            },
            background: '#ffffff',
            foreground: {
              50: '#dfdfdf',
              100: '#b3b3b3',
              200: '#868686',
              300: '#595959',
              400: '#2d2d2d',
              500: '#000000',
              600: '#000000',
              700: '#000000',
              800: '#000000',
              900: '#000000',
              foreground: '#fff',
              DEFAULT: '#000000',
            },
            content1: {
              DEFAULT: '#e3e3e3',
              foreground: '#000',
            },
            content2: {
              DEFAULT: '#e0e0e1',
              foreground: '#000',
            },
            content3: {
              DEFAULT: '#d3d3d7',
              foreground: '#000',
            },
            content4: {
              DEFAULT: '#bebec4',
              foreground: '#000',
            },
            focus: '#17b0a0',
            overlay: '#000000',
            divider: '#111111',
          },
          // light theme layout tokens
          layout: {
            boxShadow: {
              // shadow-large
              large:
                '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              // shadow-medium
              medium:
                '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              // shadow-small
              small:
                '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
            },
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
          },
        },
      },
    }),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    addVariablesForColors,
    function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: (
        utilities: Record<string, (value: string) => Record<string, unknown>>,
        options: { values: Record<string, string>; type: string }
      ) => void;
      theme: (path: string) => Record<string, string>;
    }) {
      matchUtilities(
        {
          'bg-grid': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
          'bg-dot-thick': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        }
      );
    },
  ],
};

export default config;

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: (base: Record<string, unknown>) => void;
  theme: (path: string) => Record<string, string>;
}) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
