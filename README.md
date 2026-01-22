# Tây Ninh Car - Đặt xe đi tỉnh, Sân bay giá rẻ

Dịch vụ đặt xe Tây Ninh chuyên nghiệp với giá cả minh bạch. Đưa đón sân bay, đi tỉnh, du lịch với tài xế uy tín.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components inspired by shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
booking-car/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section with booking form
│   ├── ServiceTabs.tsx     # Service type tabs
│   ├── BookingForm.tsx     # Booking form component
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       ├── select.tsx
│       ├── popover.tsx
│       └── calendar.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Features

- ✅ Modern, clean, and trustworthy UI
- ✅ Responsive design (Mobile-first)
- ✅ SEO optimized with Next.js Metadata API
- ✅ Service type switcher (Thuê xe có tài xế / Thuê xe tự lái)
- ✅ Booking form with location inputs, date picker, and car type selection
- ✅ Vietnamese language support

## Build

```bash
npm run build
# or
yarn build
```

## License

Private project

